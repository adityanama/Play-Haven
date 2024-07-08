import React, { useEffect, useState } from 'react'
import OtpInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { sendOTP, signup } from '../services/operations/authAPI';

const VerifyEmail = () => {
    const [otp, setOTP] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signupData, loading } = useSelector((state) => state.auth);

    console.log(signupData);

    useEffect(() => {
        if (!signupData) {
            navigate('/account/signup');
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        } = signupData

        dispatch(signup(firstName, lastName, email, password, confirmPassword, otp, navigate));

    }

    return (
        <div className="min-h-screen grid place-items-center">
            {
                loading ? (
                    <div className='spinner'></div>
                ) : (
                    <div className="max-w-[500px] p-4 lg:p-8 flex flex-col gap-2">
                        <h1 className="text-white font-semibold text-[1.875rem] leading-[2.375rem]">Verify your Email</h1>
                        <p className="text-[1.125rem] leading-[1.625rem] my-4 text-white">A verification code has been sent to you. Enter the code below</p>
                        <form onSubmit={handleSubmit}>
                            <OtpInput
                                value={otp}
                                onChange={setOTP}
                                numInputs={6}
                                renderInput={(props) => (
                                    <input
                                        {...props}
                                        placeholder="-"
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-[48px] lg:w-[60px] border-0 rounded-[0.5rem]  aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50 text-xl font-semibold"
                                    />
                                )}
                                containerStyle={{
                                    justifyContent: "space-between",
                                    gap: "0 6px",
                                }}
                            />
                            <button type='submit' className="w-full bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100 py-[12px] px-[12px] mt-8 font-medium text-white text-xl">Verify Email</button>
                        </form>

                        <div className="mt-6 flex items-center justify-between">
                            <div>
                                <Link to={"/signup"}>
                                    <p className="text-white flex items-center gap-x-2">
                                        <BiArrowBack />Back to signUp
                                    </p>
                                </Link>
                            </div>

                            <button className="flex items-center text-blue-100 gap-x-2" onClick={() => dispatch(sendOTP(signupData.email))}>
                                <RxCountdownTimer />
                                Resend it
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default VerifyEmail