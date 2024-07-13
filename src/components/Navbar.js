import React, { useState } from 'react'
import './Navbar.css'
import { Link, matchPath, useLocation, useNavigate } from 'react-router-dom'
import AccountMenu from './AccountMenu'
import { useSelector } from 'react-redux'
import Search from './Search'


const Navbar = () => {

    const { token } = useSelector((state) => state.auth)
    const { cartItems } = useSelector((state) => state.profile)
    const [search, setSearch] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();

    const matchRoute = (route) => {
        return matchPath({ path: route }, location.pathname)
    }

    const handleSearch = () => {
        setSearch(!search)
    }

    return (
        <>
            <div className='text-white py-2 flex justify-start gap-48 items-center work-font fixed w-full bg-[rgb(2,2,36)] top-0 shadow-2xl z-10'>
                <div onClick={() => { window.location.href = '/' }} className=' cursor-pointer ml-8'>
                    <img src='/logo.png' width="300px" alt='Logo' />
                </div>

                <div className='flex items-center gap-10 text-[22px]'>
                    <Link to={'/'}>
                        <h2 className={`${matchRoute('/') ? 'text-blue-700' : 'hover:text-blue-400'}`}>Home</h2>
                    </Link>
                    <Link to={'/store'}>
                        <h2 className={`${matchRoute('/store') ? 'text-blue-700' : 'hover:text-blue-400'}`}>Shop</h2>
                    </Link>

                    <Link to={'/aboutUs'}>
                        <h2 className={`${matchRoute('/aboutUs') ? 'text-blue-700' : 'hover:text-blue-400'}`}>About Us</h2>
                    </Link>
                    <Link to={'/ContactUs'}>
                        <h2 className={`${matchRoute('/ContactUs') ? 'text-blue-700' : 'hover:text-blue-400'}`}>Contact Us</h2>
                    </Link>

                    <button onClick={handleSearch}>
                        {
                            !search ? (
                                <img src='https://img.icons8.com/?size=100&id=kDqO6kPb3xLj&format=png&color=000000' width="50px" />
                            ) : (
                                <img src='https://img.icons8.com/?size=100&id=32646&format=png&color=000000' width="35px" />
                            )
                        }
                    </button>
                </div>

                <div className='flex items-center gap-8'>
                    <AccountMenu />
                    {
                        token && <div className='relative'>
                            <img src='https://img.icons8.com/?size=100&id=5CLFO93runX4&format=png&color=000000' width="50px" onClick={() => navigate("/cart")} className='cursor-pointer'></img>
                            {
                                cartItems > 0 &&
                                <span className='absolute -top-2 -right-2 rounded-full  text-sm w-5 h-5 bg-green-600 text-center animate-bounce' >{cartItems}</span>
                            }
                        </div>
                    }
                </div>
            </div>
            {search && <Search search={search} setSearch={setSearch} />}
        </>
    )
}

export default Navbar