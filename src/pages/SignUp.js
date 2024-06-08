import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="h-[100vh] flex items-center justify-center bg-[rgb(2,2,36)] text-white mt-16">
            <div className="bg-[rgb(2,2,36)] p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Create Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-5 mt-8">
                    <div className='flex'>
                        <label htmlFor="FirstName" className="block text-lg font-medium text-white ">Name</label>
                        <input
                            type="text"
                            id="FirstName"
                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                            required
                        />
                        <label htmlFor="name" className="block text-lg font-medium text-white ">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium text-white ">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className='relative'>
                        <label htmlFor="password" className="block text-lg font-medium text-white">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        <label htmlFor="password" className="block text-lg font-medium text-white">Confirm Password</label>
                        <input
                            type={showCnfPassword ? "text" : "password"}
                            id="password"
                            className="text-black mt-1 block w-full border-2 px-3 py-1 rounded-md placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg"
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
    );
};

export default SignUp;
