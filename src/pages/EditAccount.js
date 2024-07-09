import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { changePassword, updateProfile } from '../services/operations/SettingsAPI';
import { useNavigate } from 'react-router';

const EditAccount = () => {
    const { user, loading } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        'firstName' : user.firstName,
        'lastName' : user.lastName,
        'address' : user.additionalDetails.address,
        'contactNumber' : user.additionalDetails.contactNumber,
        'gender' : user.additionalDetails.gender,
        'dateOfBirth' : user.additionalDetails.dateOfBirth
    });

    const [passInfo, setPassInfo] = useState({
        'oldPassword': '',
        'newPassword': ''
    })

    const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"]

    console.log(formData);

    const handlePassSubmit = async () => {
        try {
            await changePassword(passInfo, token, navigate)

        } catch (error) {
            console.log(error);
        }
    }

    const handleProfileSubmit = async() => {
        try {
            dispatch(updateProfile(token,formData,navigate));
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='wrapper min-h-screen pt-40 w-9/12 mx-auto'>
            <h1 className='text-4xl text-white text-center mb-10 font-semibold'>Edit Account Information</h1>
            <div className='flex flex-row flex-wrap w-full mx-auto gap-x-32 gap-y-10 border border-gray-600 p-14 '>
                <label className='space-y-2'>
                    <p className='text-xl text-gray-400  font-semibold'>First Name</p>
                    <input
                        defaultValue={user.firstName}
                        name='firstName'
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required
                    />
                </label>
                <label className='space-y-2'>
                    <p className='text-xl text-gray-400  font-semibold'>Last Name</p>
                    <input
                        defaultValue={user.lastName}
                        name='lastName'
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required
                    />
                </label>
                <label className='space-y-2 -ml-12'>
                    <p className='text-xl text-gray-400  font-semibold'>Contact Number</p>
                    <input
                        placeholder='set contact number'
                        defaultValue={user.additionalDetails.contactNumber}
                        name='contactNumber'
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required
                    />
                </label>
                <label className='space-y-2'>
                    <p className='text-xl text-gray-400  font-semibold'>Gender</p>
                    <select

                        type='text'
                        name='gender'
                        placeholder='set gender'
                        defaultValue={user?.additionalDetails?.gender}
                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required
                    >
                        {
                            genders.map((gender, index) => (
                                <option key={index} value={gender}>
                                    {gender}
                                </option>

                            ))
                        }
                    </select>


                </label>
                <label className='space-y-2 ml-16'>
                    <p className='text-xl text-gray-400  font-semibold'>Date of Birth</p>
                    <input
                        type='date'
                        name='dateOfBirth'
                        defaultValue={user.additionalDetails.dateOfBirth}
                        className="w-[180px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required
                    />
                </label>
                <label className='space-y-2'>
                    <p className='text-xl text-gray-400 font-semibold'>Address</p>
                    <textarea
                        placeholder='set address'
                        name='address'
                        defaultValue={user.additionalDetails.address}
                        className="w-[350px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                        onChange={(e) => { setFormData({ ...formData, [e.target.name]: e.target.value }) }}
                        required    
                    />
                </label>

            </div>
            <div className='flex flex-row gap-4  ml-1 mt-4'>
                <button className="w-[120px] bg-yellow-400 p-2 text-black rounded-lg hover:bg-yellow-600 transition duration-300 text-xl" onClick={() => {navigate(-1)}}>Back</button>
                <button className="w-[120px] bg-indigo-600 p-2 text-white rounded-lg hover:bg-indigo-800 transition duration-300 text-xl" onClick={handleProfileSubmit}>Save</button>
            </div>

            <div className='mt-20 w-full'>
                <h1 className='text-4xl text-white text-center mb-10 font-semibold'>Change Password</h1>
                <div className='flex flex-row w-full mx-auto justify-evenly border border-gray-400 p-12'>
                    <div className="mb-4 relative">
                        <label className="block text-gray-200 text-md mb-2" htmlFor="password">
                            Old Password
                        </label>
                        <input
                            className="w-[300px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter current password"
                            name="oldPassword"
                            value={passInfo.oldPassword}
                            onChange={(e) => { setPassInfo({ ...passInfo, [e.target.name]: e.target.value }) }}
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
                            New Password
                        </label>
                        <input
                            className="w-[300px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            type={showCnfPassword ? "text" : "password"}
                            id="confirm-password"
                            placeholder="Enter new password"
                            name="newPassword"
                            value={passInfo.newPassword}
                            onChange={(e) => { setPassInfo({ ...passInfo, [e.target.name]: e.target.value }) }}
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
                </div>
                <div className='flex flex-row gap-4  ml-1 mt-4 pb-12'>
                    <button className="w-[120px] bg-yellow-400 p-2 text-black rounded-lg hover:bg-yellow-600 transition duration-300 text-xl" onClick={() => {navigate(-1)}}>Back</button>
                    <button className="w-[120px] bg-indigo-600 p-2 text-white rounded-lg hover:bg-indigo-800 transition duration-300 text-xl" onClick={handlePassSubmit}>Save</button>
                </div>
            </div>

        </div>
    )
}

export default EditAccount