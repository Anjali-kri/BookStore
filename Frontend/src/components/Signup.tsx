import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from "axios";

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const userInfo = {
            fullName: data.fullName,
            email: data.email,
            password: data.password, 
        };
        const response = await axios.post("http://localhost:4000/user/signup", userInfo);
        console.log(response.data, "=====");
        if(response.data) {
            alert("signup Successfully");
            <Navigate to = {"/"}/>
        } else {
            alert("something went wrong");
        }
        localStorage.setItem("user", JSON.stringify(response.data.user));
    }

    return (
        <>
            <div>
                <div className="items-center justify-center h-screen flex">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </Link>
                            <h3 className="font-bold text-lg">Signup</h3>
                            <div className="mt-4">
                                <label>Name</label><br />
                                <input className="mt-2 mb-2 border bg-slate-200 p-2 rounded-md w-3/4 items-center"
                                    type="text"
                                    placeholder="Enter your Name"
                                    {...register('fullName', { required: true })}
                                /><br />
                                {errors.Name && <p className='text-red-400'>Name is required.</p>}
                                <label>Email</label><br />
                                <input className="mt-2 mb-2 border bg-slate-200 p-2 rounded-md w-3/4 items-center"
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register('email', { required: true })}
                                /><br />
                                {errors.email && <p className='text-red-400'>Email is required.</p>}
                                <label>Password</label><br />
                                <input className="mt-2 mb-2 border bg-slate-200 p-2 rounded-md w-3/4 items-center"
                                    type="password"
                                    placeholder="Enter your Password"
                                    {...register('password', { required: true })}
                                />
                                {errors.password && <p className='text-red-400'>Password is required.</p>}
                            </div>
                            <div className="flex justify-between mt-4">
                                <button className="bg-pink-500 text-white hover:bg-pink-600 rounded-md px-2 py-1 cursor-pointer" type="submit">Signup</button>
                                <p>Have Account? {" "}
                                    <button className="underline text-blue-500 cursor-pointer py-1"
                                        onClick={() => document.getElementById('my_modal_3').showModal()}
                                    >Login</button>
                                    <Login />
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;
