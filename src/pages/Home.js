import React from 'react'
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import {GameData} from '../GamesData';
import NewRelease from '../components/NewRelease';


const Home = () => {
    return (
        <div className='mt-16 py-8'>
            <Hero></Hero>
            <Slider GameData={GameData}></Slider>
            <Categories></Categories>
            <SpecialOffers></SpecialOffers>
            <NewRelease></NewRelease>
        </div>
    )
}

export default Home