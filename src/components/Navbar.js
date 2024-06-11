import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import AccountMenu from './AccountMenu'


const Navbar = () => {
    return (
        <div className='text-white py-2 flex justify-around items-center work-font fixed w-full bg-[rgb(2,2,36)] top-0 shadow-xl z-10'>
            <div onClick={() => { window.location.href = '/' }} className=' cursor-pointer'>
                <img src='/logo.png' width="300px" alt='Logo' />
            </div>

            <div className='flex items-center gap-8 text-[22px]'>
                <Link to={'/'}>
                    <h2 className='hover:text-blue-600'>Home</h2>
                </Link>
                <Link to={'/store'}>
                    <h2 className='hover:text-blue-600'>Shop</h2>
                </Link>
                <a href="#deals">Deals</a>
                <h2 className='hover:text-blue-600'><a href="#new-release">New Release</a></h2>

                <Link to={'/'}>
                    <h2 className='hover:text-blue-600'>About Us</h2>
                </Link>
                <Link to={'/'}>
                    <h2 className='hover:text-blue-600'>Contact Us</h2>
                </Link>
                
                <img src='https://img.icons8.com/?size=100&id=kDqO6kPb3xLj&format=png&color=000000' width="50px" />
            </div>

            <div className='flex items-center gap-6'>
                <AccountMenu></AccountMenu>
                <img src='https://img.icons8.com/?size=100&id=0EhgLACHNOtp&format=png&color=000000' width="50px" ></img>
                <img src='https://img.icons8.com/?size=100&id=5CLFO93runX4&format=png&color=000000' width="50px" ></img>
            </div>
        </div>
    )
}

export default Navbar