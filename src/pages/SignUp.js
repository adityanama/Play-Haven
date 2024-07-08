import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { apiConnector } from '../services/apiConnector';
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../Slices/authSlice';
import toast from 'react-hot-toast';
import { sendOTP } from '../services/operations/authAPI';

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loading} = useSelector((state) => state.auth)

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);

    const { firstName, lastName, email, password, confirmPassword } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        const signupData = {
            ...formData,
        }

        dispatch(setSignupData(signupData))
        dispatch(sendOTP(formData.email, navigate))

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

    return (
        <div className="min-h-screen grid place-items-center">
            {

                loading ? (
                    <div className='spinner'></div>
                ) : (
                    <div className="h-[100vh] flex items-center justify-center bg-[rgb(2,2,36)] text-white mt-12">
                        <div className="bg-[rgb(2,2,36)] p-8  w-full max-w-lg">
                            <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
                            <form onSubmit={handleSubmit} className="space-y-5 mt-12">
                                <div className='flex gap-8'>
                                    <div>
                                        <label htmlFor="FirstName" className="block text-lg font-medium text-white ">First Name</label>
                                        <input
                                            type="text"
                                            id="FirstName"
                                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                                            name="firstName"
                                            value={firstName}
                                            onChange={handleOnChange}
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="name" className="block text-lg font-medium text-white ">Last Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                                            name="lastName"
                                            value={lastName}
                                            onChange={handleOnChange}
                                            placeholder="Enter first name"
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-lg font-medium text-white ">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                                        name="email"
                                        value={email}
                                        onChange={handleOnChange}
                                        placeholder="Enter email"
                                        required
                                    />
                                </div>
                                <div className='relative'>
                                    <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                                        name="password"
                                        value={password}
                                        onChange={handleOnChange}
                                        placeholder="Enter password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setShowPassword(!showPassword) }}
                                        className="absolute  right-0 top-[45px] px-3 flex items-center text-gray-500"
                                    >
                                        {showPassword ? (
                                            <FaRegEyeSlash />
                                        ) : (
                                            <FaRegEye />
                                        )}
                                    </button>
                                </div>
                                <div className='relative'>
                                    <label htmlFor="Cnfpassword" className="block text-lg font-medium text-white">Confirm Password</label>
                                    <input
                                        type={showCnfPassword ? "text" : "password"}
                                        id="Cnfpassword"
                                        className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleOnChange}
                                        placeholder="Confirm password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setShowCnfPassword(!showCnfPassword) }}
                                        className="absolute  right-0 top-[45px] px-3 flex items-center text-gray-500"
                                    >
                                        {showCnfPassword ? (
                                            <FaRegEyeSlash />
                                        ) : (
                                            <FaRegEye />
                                        )}
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    className="w-24 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 block mx-auto"
                                >
                                    Sign Up
                                </button>
                            </form>

                            <div className='mt-8 text-lg'>
                                <p className="text-gray-300 text-center">Already have an account? <Link to="/account/LogIn" className="text-blue-500 hover:text-blue-600">Log In</Link></p>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SignUp;
