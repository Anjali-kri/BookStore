import React from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from "axios";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const userInfo = {            
            email: data.email,
            password: data.password, 
        };
        const response = await axios.post("http://localhost:4000/user/login", userInfo);
        console.log(response.data, "=====");
        if(response.data) {
            alert("Login Successfully");
            document.getElementById("my_modal_3").close()
        } else {
            alert("something went wrong");
        }
        window.location.reload();
        localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Login</h3>
                            <div className="mt-4">
                                <label>Email</label><br />
                                <input className="mt-2 mb-2 border bg-slate-200 p-2 rounded-md w-3/4 items-center"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register('email', { required: true })}
                                />
                                <br />
                                {errors.email && <p className='text-red-400'>Email is required.</p>}
                                <label>Password</label><br />
                                <input className="mt-2 mb-2 border bg-slate-200 p-2 rounded-md w-3/4 items-center" type="password" placeholder="Enter your password"
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <p className='text-red-400'>Password is required.</p>}
                            </div>
                            <div className="flex justify-between mt-4">
                                <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-md px-2 py-1 cursor-pointer" type="submit">Login</button>
                                <p>Not Registered? {" "}
                                    <Link to={"/signup"} className="underline text-blue-500 cursor-pointer py-1">SignUp</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    );
};

export default Login;
