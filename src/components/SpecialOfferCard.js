import React from 'react'

const SpecialOffercard = ({ GameData }) => {
    return (
        <div className='flex flex-col text-white border-2 border-blue-900 p-4 pb-0 h-[490px] gap-6 w-[320px] justify-evenly rounded-xl hover:scale-110 duration-150 ease-in cursor-pointer'>
            <img src={GameData.img} width="300px"></img>
            <div>
                <h1 className='text-white text-2xl font-semibold'>{GameData.title}</h1>
                <div className='flex gap-6 items-center'>
                    <div className='bg-blue-800 px-2 py-2 rounded-xl text-lg'>{`${GameData.discount} % Off `}</div>
                    <div className='flex items-center'>
                        <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-30 -ml-8' />
                        <h2 className='text-3xl -ml-8 text-green-400 font-semibold'>{GameData.specialPrice}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialOffercard