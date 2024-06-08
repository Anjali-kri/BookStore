import User from "../model/userSchema.model.js";
import bcryptjs from "bcrypt";

export const signup = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({message: "user already exist"});

        }
        const hashPass = await bcryptjs.hash(password, 10);
        const createUser = new User({
            fullName : fullName,
             email : email,
             password : hashPass,
        });
        await createUser.save();
        res.status(201).json({message: "user created successfully",
        user: {
            _id: createUser._id,
            fullName:createUser.fullName,
            email:createUser.email,
        }
    });
    } catch (error) {
        res.status(500).json({message: "internal server error"});
    }
};

export const Login = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch || !user) {
            return res.status(400).json({message: "user not found"});
        } else {
            return res.status(200).json({message: "Login successfully", 
            user : {
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
            }
        });            
        }
    } catch (error){
        console.log(error.message, "error");
    }
}