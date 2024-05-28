import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='relative'>
            <img src='https://bgeek.eu/wp-content/uploads/2021/05/ubisoft-plus_hero_mobile.jpg' className='pt-16 opacity-25 mb-32 mx-auto -z-[100]'></img>
            <div className='text-white absolute top-48 text-7xl left-32'>
                <p className='hero-title'>Your Gaming Journey</p>
                <br></br>
                <p className='-mt-8 hero-title'>Begins Here!</p>

                <div className='mt-16 gap-16 flex'>
                    <button className='text-2xl py-3 px-4 bg-[rgb(2,2,100)] rounded-xl'>Shop Now</button>
                    <button className='text-2xl py-3 px-4 bg-[rgb(2,2,100)] rounded-xl ml-16'>View Deals</button>
                </div>
            </div>

        </div>
    )
}

export default Hero