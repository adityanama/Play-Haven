import React from 'react'
import './Navbar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AccountMenu from './AccountMenu'
import { useSelector } from 'react-redux'


const Navbar = () => {
    
    const {totalItems} = useSelector((state) => state.cart)
    const {token} = useSelector((state) => state.auth)
    console.log(token)
    const navigate = useNavigate();
    const location = useLocation();
    
    return (
        <div className='text-white py-2 flex justify-start gap-48 items-center work-font fixed w-full bg-[rgb(2,2,36)] top-0 shadow-xl z-10'>
            <div onClick={() => { window.location.href = '/' }} className=' cursor-pointer ml-8'>
                <img src='/logo.png' width="300px" alt='Logo' />
            </div>

            <div className='flex items-center gap-10 text-[22px]'>
                <Link to={'/'}>
                    <h2 className='hover:text-blue-600'>Home</h2>
                </Link>
                <Link to={'/store'}>
                    <h2 className='hover:text-blue-600'>Shop</h2>
                </Link>

                <Link to={'/aboutUs'}>
                    <h2 className='hover:text-blue-600'>About Us</h2>
                </Link>
                <Link to={'/ContactUs'}>
                    <h2 className='hover:text-blue-600'>Contact Us</h2>
                </Link>

                <img src='https://img.icons8.com/?size=100&id=kDqO6kPb3xLj&format=png&color=000000' width="50px" />
            </div>

            <div className='flex items-center gap-8'>
                <AccountMenu />
                {
                    token && <img src='https://img.icons8.com/?size=100&id=0EhgLACHNOtp&format=png&color=000000' width="50px" onClick={() => navigate("/wishlist")} className='cursor-pointer'></img>
                }
                {
                    token &&  <div className='relative'>
                        <img src='https://img.icons8.com/?size=100&id=5CLFO93runX4&format=png&color=000000' width="50px" onClick={() => navigate("/cart")} className='cursor-pointer'></img>
                        {
                            totalItems > 0 &&
                            <span className='absolute -top-2 -right-2 rounded-full  text-sm w-5 h-5 bg-green-600 text-center animate-bounce' >{totalItems}</span>
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar