import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BiArrowBack } from "react-icons/bi"
import { Link } from 'react-router-dom';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const handlesumbit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent));
    }

    return (
        <div className='grid min-h-screen place-items-center'>
            {
                loading ? (
                    <div className='spinner'></div>
                ) : (
                    <div className="max-w-[500px] p-8 mx-auto mt-16">
                        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-white text-center mb-10">
                            {
                                !emailSent ? "Reset your Password" :
                                    "Check your Email"
                            }
                        </h1>
                        {
                            !emailSent ? (
                                <p className="my-6 text-[1.125rem] leading-[1.625rem] text-gray-300">
                                    Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery
                                </p>
                            ) : (
                                <p className="my-4 text-[1.125rem] leading-[1.625rem] text-gray-300">
                                    We've sent an email to <span className='underline'>{email}</span> with instructions to reset your password.
                                </p>
                            )
                        }


                        <form onSubmit={handlesumbit}>
                            {
                                !emailSent && (
                                    <label className='w-full'>
                                        <p className="block text-gray-100 text-md mb-2">Email Address</p>
                                        <input
                                            type='email'
                                            required
                                            name='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder='Enter your Email Address'
                                            className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        />
                                    </label>
                                )
                            }
                            <button className="w-5/12 bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-800 transition duration-300 mt-8 mx-auto block" type='submit'>
                                {
                                    !emailSent ? "Reset Password" : "Resend Email"
                                }
                            </button>
                        </form>

                        <div className="mt-4 flex items-center justify-between">
                            <Link to={"/account/login"}>
                                <p className="flex items-center gap-x-2 text-gray-100">
                                    <BiArrowBack /> Back to Login
                                </p>
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ForgotPassword