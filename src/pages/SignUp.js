import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setSignupData } from '../Slices/authSlice';
import toast from 'react-hot-toast';
import { sendOTP } from '../services/operations/authAPI';

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)

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
                    <div className="min-h-screen flex items-center justify-center bg-[rgb(2,2,36)] pt-24 w-[500px]">
                        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full">
                            <h1 className="text-3xl font-bold text-center text-white mb-8">Create new Account</h1>
                            <form onSubmit={handleSubmit}>
                                <div className='flex gap-8'>
                                    <div className="mb-4">
                                        <label className="block text-gray-200 text-md mb-2" htmlFor="firstname">
                                            First Name
                                        </label>
                                        <input
                                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                            type="text"
                                            id="firstname"
                                            placeholder="Enter your first name"
                                            name="firstName"
                                            value={firstName}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-200 text-md mb-2" htmlFor="lastname">
                                            Last Name
                                        </label>
                                        <input
                                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                            type="text"
                                            id="lastname"
                                            placeholder="Enter your last name"
                                            name="lastName"
                                            value={lastName}
                                            onChange={handleOnChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-200 text-md mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        onChange={handleOnChange}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-gray-200 text-md mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        type={showPassword ? "text": "password"}
                                        id="password"
                                        placeholder="Enter your password"
                                        name="password"
                                        value={password}
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setShowPassword(!showPassword) }}
                                        className="absolute right-0 top-[50px] px-3 flex items-center text-gray-500"
                                    >
                                        {showPassword ? (
                                            <FaRegEyeSlash />
                                        ) : (
                                            <FaRegEye />
                                        )}
                                    </button>

                                </div>
                                <div className="mb-4 relative">
                                    <label className="block text-gray-200 text-md mb-2" htmlFor="confirm-password">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        type={showCnfPassword ? "text": "password"}
                                        id="confirm-password"
                                        placeholder="Confirm your password"
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={handleOnChange}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => { setShowCnfPassword(!showCnfPassword) }}
                                        className="absolute  right-0 top-[50px] px-3 flex items-center text-gray-500"
                                    >
                                        {showCnfPassword ? (
                                            <FaRegEyeSlash />
                                        ) : (
                                            <FaRegEye />
                                        )}
                                    </button>

                                </div>
                                <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-800 transition duration-300" type='submit'>
                                    Sign Up
                                </button>
                            </form>
                            <div className="text-center mt-4">
                                <Link to="/account/login" className="text-gray-400 text-sm">Already have an account? <span className='text-blue-500 hover:text-blue-700 duration-150'>Log In</span></Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SignUp;