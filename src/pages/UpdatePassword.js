import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { resetPassword } from '../services/operations/authAPI';

const UpdatePassword = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        password: "",
        cnfPassword: "",
    })
    
    const [showPass, setShowPass] = useState(true);
    const [showCnfPass, setShowCnfPass] = useState(true);
    const { loading } = useSelector((state) => state.auth);

    const handlechange = (e) => {
        setFormData((prev) => (
            {
                ...prev,
                [e.target.name]: e.target.value
            }
        ))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(formData.password, formData.cnfPassword, token));
        navigate("/account/login");
    }

    return (
        <div className='grid min-h-screen place-items-center'>
            {
                loading ? (
                    <div className='spinner'></div>
                ) : (
                    <div className='max-w-[500px] p-10 mt-16'>
                        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white">Create new Password</h1>
                        <p className="my-4 text-[1.125rem] leading-[1.625rem] text-white">Almost done. Enter your new password and you are all set.</p>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 mt-8'>
                            <label className='relative'>
                                <p className="mb-1 text-md leading-[1.375rem] text-gray-200">New Password</p>
                                <input
                                    required
                                    type={showPass ? 'password' : 'text'}
                                    name='password'
                                    value={formData.password}
                                    onChange={handlechange}
                                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder='Enter Password'
                                />
                                <span
                                    onClick={() => setShowPass((prev) => !prev)}
                                    className="absolute right-0 top-[40px] px-3 flex items-center text-gray-500"
                                >
                                    {showPass ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>

                            </label>
                            <label className='relative'>
                                <p className="mb-1 text-md leading-[1.375rem] text-gray-200">Confirm New Password</p>
                                <input
                                    required
                                    type={showCnfPass ? 'password' : 'text'}
                                    name='cnfPassword'
                                    value={formData.cnfPassword}
                                    onChange={handlechange}
                                    className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    placeholder='Confirm Password'
                                />
                                <span
                                    onClick={() => setShowCnfPass((prev) => !prev)}
                                    className="absolute right-3 top-[38px] z-[10] cursor-pointer">
                                    {showCnfPass ? (
                                        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                    ) : (
                                        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                    )}
                                </span>
                            </label>

                            <button className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-800 transition duration-300 mt-4" type='submit'>
                                Reset Password
                            </button>
                        </form>
                        <div className="mt-6 flex items-center justify-between">
                            <Link to="/login">
                                <p className="flex items-center gap-x-2 text-gray-300">
                                    <BiArrowBack /> Back To Login
                                </p>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default UpdatePassword