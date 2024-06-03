import React from 'react'

const GameCard = ({ GameData }) => {
    return (
        <div className='flex flex-col text-white border-2 border-blue-900 p-4 pb-0 h-[480px] w-[320px] justify-between rounded-xl hover:scale-110 duration-150 ease-in cursor-pointer'>
            <img src={GameData.img} width="300px"></img>
            <h1 className='text-white text-2xl mt-4 font-semibold'>{GameData.title}</h1>
            <div className='flex items-center -mt-3'>
                <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-30 -ml-8' />
                <h2 className='text-3xl -ml-8 text-green-400 font-semibold'>{GameData.price}</h2>
            </div>
        </div>
    )
}

export default GameCard