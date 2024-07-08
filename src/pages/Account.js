import React, { useRef, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfilePic } from '../services/operations/SettingsAPI'

const Account = () => {
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    // const [ImageFile, SetImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
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
            setLoading(true);
            const formData = new FormData();
            if (ImageFile) {
                formData.append("displayPicture", ImageFile);
                console.log(formData)

                dispatch(updateProfilePic(formData, token)).then(() => {
                    setLoading(false);
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='min-h-screen wrapper pt-48'>
            <div className='flex w-10/12 justify-between items-center mx-auto gap-24'>
                <div className='flex flex-col gap-4 justify-center items-center w-[200px]'>
                    <div className='relative group cursor-pointer' onClick={handleImageClick}>
                        <img src={user.image} alt='Profile' height={90} width={90} className='rounded-full group-hover:blur-sm transition duration-300 aspect-square' />
                        <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                            <FaPencilAlt className='text-white text-2xl'/>
                        </div>
                    </div>
                    <input
                        type='file'
                        ref={fileInputRef}
                        className='hidden'
                        onChange={handleFileChange}
                        accept="image/png, image/gif, image/jpeg, image/jpg"
                    />
                    <p className='text-2xl text-white'>{user.firstName} {user.lastName}</p>
                </div>
                <div className='flex flex-row flex-wrap gap-12'>
                    <label>
                        <p className='text-xl text-white font-semibold'>Email</p>
                        <input
                            disabled
                            value={user.email}
                            className='p-2 rounded-lg w-[260px] bg-white text-lg'
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            disabled
                            value={user.email}
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            disabled
                            value={user.email}
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            disabled
                            value={user.email}
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            disabled
                            value={user.email}
                        />
                    </label>
                    <label>
                        <p>Email</p>
                        <input
                            disabled
                            value={user.email}
                        />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Account