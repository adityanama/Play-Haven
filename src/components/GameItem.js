import React from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';

import { removeFromCart } from '../services/operations/cartAPI';
import { setCartItems } from '../Slices/profileSlice';


const GameItem = ({ game, flag, fetchGames}) => {

    const {token} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleRemove = async() => {
        await removeFromCart(token)
        const len = await fetchGames()
        dispatch(setCartItems(len))
    }

    return (
        <div className={`flex gap-12 pb-8 min-h-60 ${flag ? 'border-0' : 'border-b-[3px]'}`}>
            <div className=''>
                <img src={game.img} className='w-[400px]' />
            </div>
            <div className='flex flex-col gap-6 w-full justify-between'>
                <h1 className='font-bold text-3xl text-white mt-4 '>{game.title}</h1>

                <div className='flex justify-between mt-2 items-center w-8/12'>
                    <div className='flex items-center -mt-2'>
                        <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-40 -ml-8' />
                        <h2 className='text-4xl -ml-6 text-green-400 font-semibold'>{game.price}</h2>
                    </div>
                    <div className='flex justify-center text-red-800 bg-red-200 w-10 h-10 rounded-full -mt-1 items-center cursor-pointer' onClick={handleRemove}>
                        <RiDeleteBin7Fill size={"23"}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default GameItem