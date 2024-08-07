import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Games } from '../GamesData';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../services/operations/cartAPI';
import { setCartItems } from '../Slices/profileSlice';


const GameInfo = () => {
    const { gameTitle } = useParams();
    const {token} = useSelector((state) => state.auth)
    const {cartItems} = useSelector((state) => state.profile)
    const game = Games.find((game) => game.title === gameTitle);
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleAddToCart = async() => {
        if(!token)
            navigate('/account/login')
        else
        {
            const res = await addToCart(game, token)

            if(res)
                dispatch(setCartItems(cartItems+1))
        }
    }

    return (
        <div className="pt-36 text-white flex w-11/12 mx-auto min-h-screen">
            <img src={game.img} alt={game.title} className='rounded-lg max-h-[400px] max-w-[400px] mt-8' />
            <div className='w-7/12 mx-auto flex flex-col gap-4'>
                <h1 className='text-5xl font-bold text-[rgb(82,160,255)]'>{game.title}</h1>
                <h1 className='text-2xl mt-4'>Developer : <span className='font-semibold'>{game.developer}</span></h1>
                <p className='text-xl mt-8 leading-8 text-gray-300 text-justify'>{game.description}</p>
                <div className='flex items-center -mt-2'>
                    <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-50 -ml-8' />
                    <h2 className='text-5xl -ml-6 text-green-400 font-semibold'>{game.price}</h2>
                </div>
                <div className='flex gap-12 mt-4 pb-10'>
                    <button className='text-2xl py-3 px-2 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100 w-3/12 -mt-2 text-white font-semibold' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default GameInfo