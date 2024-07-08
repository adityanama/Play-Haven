import React from 'react'
import { useSelector } from 'react-redux'

const Account = () => {
    const { user } = useSelector((state) => state.profile)
    console.log(user)
    return (
        <div className='min-h-screen wrapper pt-48'>
            <div className='flex w-10/12 justify-between items-center mx-auto gap-24'>
                <div className='flex flex-col gap-4 justify-center items-center w-[200px]'>
                    <img src={user.image} height={70} width={70} className='rounded-full' />
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