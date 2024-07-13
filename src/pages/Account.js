import React, {useRef } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfilePic } from '../services/operations/SettingsAPI'
import { useNavigate } from 'react-router'
import GamesBoughtTable from '../components/GamesBoughtTable'


const Account = () => {
    const { user, loading } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    console.log(user)
    const fileInputRef = useRef(null);

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        if (file) {
            handleFileUpload(file)
        }

    };

    const handleFileUpload = (ImageFile) => {
        try {
            const formData = new FormData();
            if (ImageFile) {
                formData.append("displayPicture", ImageFile);
                console.log(formData)

                dispatch(updateProfilePic(formData, token))
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className="min-h-screen grid place-items-center">
                        <div className='spinner'></div>
                    </div>
                ) : (
                    <div className='min-h-screen wrapper pt-40'>
                        <h1 className='text-white text-4xl ml-32 mb-4'>My Profile</h1>
                        <div className='flex flex-row w-10/12 justify-between items-start mx-auto gap-36 border border-gray-600 p-10 '>
                            <div className='flex flex-col gap-4 justify-center items-center w-[200px]'>
                                <div className='relative group cursor-pointer' onClick={handleImageClick}>
                                    <img src={user.image} alt='Profile' width={105} className='rounded-full group-hover:blur-sm transition duration-300 aspect-square' />
                                    <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                                        <FaPencilAlt className='text-white text-2xl' />
                                    </div>
                                </div>
                                <input
                                    type='file'
                                    ref={fileInputRef}
                                    className='hidden'
                                    onChange={handleFileChange}
                                    accept="image/png, image/gif, image/jpeg, image/jpg"
                                />
                                <p className='text-2xl text-white '>{user.firstName} {user.lastName}</p>
                            </div>
                            <div className='flex flex-row flex-wrap gap-9 mx-auto w-8/12'>
                                <label className='space-y-2'>
                                    <p className='text-xl text-gray-300  font-semibold'>Email</p>
                                    <input
                                        disabled
                                        value={user.email}
                                        className="w-[260px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"
                                    />
                                </label>
                                <label className='space-y-2'>
                                    <p className='text-xl text-gray-300  font-semibold'>Contact Number</p>
                                    <input
                                        disabled
                                        placeholder='set contact number'
                                        value={user.additionalDetails.contactNumber}
                                        className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"  
                                    />
                                </label>
                                <label className='space-y-2'>
                                    <p className='text-xl text-gray-300  font-semibold'>Gender</p>
                                    <input
                                        disabled
                                        placeholder='set gender'
                                        value={user.additionalDetails.gender}
                                        className="w-8/12 p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"  
                                    />
                                </label>
                                <label className='space-y-2'>
                                    <p className='text-xl text-gray-300  font-semibold'>Date of Birth</p>
                                    <input
                                        disabled
                                        placeholder='set DOB'
                                        value={user.additionalDetails.dateOfBirth}
                                        className="w-[180px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"  
                                    />
                                </label>
                                <label className='space-y-2 mx-20'>
                                    <p className='text-xl text-gray-300 font-semibold'>Address</p>
                                    <textarea
                                        disabled
                                        placeholder='set address'
                                        value={user.additionalDetails.address}
                                        className="min-w-[300px] p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 text-lg"  
                                    />
                                </label>
                                <button className="w-[100px] bg-indigo-600 p-2 text-white rounded-lg hover:bg-indigo-800 transition duration-300 text-xl" onClick={() => {navigate("/account/edit")}}>Edit</button>
                            </div>
                        </div>

                        <GamesBoughtTable/>
                    </div>
                )
            }
        </>
    )
}

export default Account