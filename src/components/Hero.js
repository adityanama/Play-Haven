import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router'

const Hero = () => {

    const navigate = useNavigate();
    return (
        <div className='relative'>
            <img src='https://bgeek.eu/wp-content/uploads/2021/05/ubisoft-plus_hero_mobile.jpg' className='pt-16 opacity-25 mb-24 mx-auto'></img>
            <div className='    text-white absolute lg:top-48 lg:text-7xl left-32 text-3xl top-24'>
                <p className='hero-title'>Your Gaming Journey</p>
                <br></br>
                <p className='-mt-8 hero-title'>Begins Here!</p>

                <div className='lg:mt-16 gap-16 flex mt-12'>
                    <button className='text-2xl py-3 px-4 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100' onClick={() => navigate("/store")}>Shop Now</button>
                    <a href={'#deals'} className='text-2xl py-3 px-4 bg-[rgba(2,2,100)] rounded-xl hover:bg-[rgb(3,3,44)] duration-100'>View Deals</a>
                </div>
            </div>

        </div>
    )
}

export default Hero