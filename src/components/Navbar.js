import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='text-white pt-2 flex justify-around items-center work-font'>
            <div>
                <img src='/logo.png' width="300px"/>
            </div>

            <div className='flex items-center gap-8 text-[22px]'>
                <h2>Home</h2>
                <h2>Shop</h2>
                <h2>Deals</h2>
                <h2>New Releases</h2>
                <h2>About Us</h2>
                <h2>Contact Us</h2>
                <img src='https://img.icons8.com/?size=100&id=kDqO6kPb3xLj&format=png&color=000000' width="50px"/>
            </div>

            <div className='flex items-center gap-6'>
                <img src='https://img.icons8.com/?size=100&id=15265&format=png&color=FFFFFF' width="50px" ></img>
                <img src='https://img.icons8.com/?size=100&id=0EhgLACHNOtp&format=png&color=000000' width="50px" ></img>
                <img src='https://img.icons8.com/?size=100&id=5CLFO93runX4&format=png&color=000000' width="50px" ></img>
            </div>
        </div>
    )
}

export default Navbar