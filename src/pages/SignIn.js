import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="h-[100vh] flex items-center justify-center bg-[rgb(2,2,36)] text-white mt-8">
            <div className="bg-[rgb(2,2,36)] p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Login to Your Account</h2>
                <form onSubmit={handleSubmit} className="space-y-8 mt-12">
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
                            onClick={() => {setShowPassword(!showPassword)}}
                            className="absolute  right-0 top-[45px] px-3 flex items-center text-gray-500"
                        >
                            {showPassword ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10 2a8 8 0 00-7.47 4.89.75.75 0 001.34.68A6.5 6.5 0 0110 4.5a6.5 6.5 0 016.13 3.07.75.75 0 101.34-.68A8 8 0 0010 2zm.5 8.75a.75.75 0 010 1.5H9a.75.75 0 010-1.5h1.5z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M3.92 9.5A6.5 6.5 0 0110 6.5a6.5 6.5 0 016.08 3.07.75.75 0 01-1.34.68A5 5 0 0010 8a5 5 0 00-4.74 3.25.75.75 0 01-1.34-.68zM10 10.5a1.5 1.5 0 10.001 2.999A1.5 1.5 0 0010 10.5zm0-1.5a.75.75 0 00-.75.75V10h-.25a.75.75 0 000 1.5H9a.75.75 0 000 1.5h.25v.25a.75.75 0 001.5 0V13H11a.75.75 0 000-1.5h-.25V10a.75.75 0 00-.75-.75zm0-1.25a3 3 0 110 6 3 3 0 010-6z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 00-7.47 4.89.75.75 0 001.34.68A6.5 6.5 0 0110 4.5a6.5 6.5 0 016.13 3.07.75.75 0 101.34-.68A8 8 0 0010 2zm.5 8.75a.75.75 0 010 1.5H9a.75.75 0 010-1.5h1.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-24 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 block mx-auto"
                    >
                        Login
                    </button>
                </form>

                <div className='mt-8 text-lg'>
                    <p className="text-gray-300 text-center">Don't have an account? <Link to="/account/SignUp" className="text-blue-500 hover:text-blue-600">Sign up</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignIn;
