import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import GameItem from '../components/GameItem'
import { buyGame } from '../services/operations/studentFeaturesAPI'
import { clearCart, getGames } from '../services/operations/cartAPI'
import { setCartItems } from '../Slices/profileSlice'


const Cart = () => {

    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const [cart, setCart] = useState([])
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0);



    const dispatch = useDispatch();
    const navigate = useNavigate();

    const fetchGames = async () => {
        setLoading(true)
        const res = await getGames(token)
        console.log(res)
        setCart(res)
        setLoading(false)
        return res.length
    }

    useEffect(() => {
        fetchGames();
    }, [])

    useEffect(() => {
        // if(cart.length)
        cart && setTotal(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    const handlePurchase = () => {
        buyGame(token, cart, total, user, navigate, dispatch)
    }

    const clearcart = async () => {
        await clearCart(token)
        fetchGames()
        dispatch(setCartItems(0))
    }

    console.log(total)

    return (
        <div className='min-h-screen'>
            {
                loading ? (<div className='spinner grid place-items-center'></div>) : (
                    <div className='min-h-screen'>
                        {
                            cart && cart.length > 0 ?
                                (<div className='flex justify-between gap-0 mt-28 pt-12 w-9/12 mx-auto items-start'>
                                    <div className='flex flex-col w-8/12 gap-14 mb-16'>
                                        {
                                            cart.map((game, index) => (
                                                <GameItem game={game} key={index} flag={game.id === cart.at(-1).id} fetchGames={fetchGames} />
                                            ))
                                        }

                                    </div>

                                    <div className='flex flex-col justify-between h-[420px] mt-12'>
                                        <div className='flex flex-col'>
                                            <p className=' text-blue-500 font-bold uppercase text-lg'>Your Cart</p>
                                            <p className=' text-blue-500 font-bold uppercase text-5xl'>Summary</p>
                                            <p className='mt-5 text-2xl'>
                                                <span className='font-semibold mr-1 text-white'>Total Items  : {cart.length}</span>
                                            </p>
                                        </div>

                                        <div className='flex flex-col gap-1'>
                                            <div className='flex flex-row items-center'>
                                                <p className='text-2xl font-semibold mr-2 text-white'>Total Amount :
                                                </p>
                                                <div className='flex items-center -mt-2 justify-center'>
                                                    <img src='https://img.icons8.com/?size=100&id=87769&format=png&color=FFFFFF' className=' scale-30 -ml-8' />
                                                    <h2 className='text-4xl -ml-9 text-green-400 font-semibold'>{total}</h2>
                                                </div>
                                            </div>
                                            <button className='text-white font-bold bg-blue-700 px-4 py-3 rounded-lg hover:bg-blue-900 duration-300 text-2xl -mt-4 mb-8' onClick={handlePurchase}>Checkout</button>
                                            <button className='text-white font-bold bg-red-600 px-4 py-3 rounded-lg hover:bg-red-900 duration-300 text-2xl -mt-4' onClick={clearcart}>Clear Cart</button>
                                        </div>
                                    </div>
                                </div>) :

                                (<div className='flex flex-col gap-10 items-center justify-center h-[600px]'>
                                    <h2 className='text-2xl text-white font-semibold'>Your Cart is empty!</h2>
                                    <button className='text-2xl py-3 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100 w-48 -mt-2 text-white font-semibold' onClick={() => navigate("/store")}>SHOP NOW</button>
                                </div>)
                        }

                    </div >
                )
            }
        </div>
    )
}

export default Cart