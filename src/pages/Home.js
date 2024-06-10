import React from 'react'
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import {GameData} from '../GamesData';
import NewRelease from '../components/NewRelease';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='my-16 py-8'>
            <Hero></Hero>
            <Slider GameData={GameData}></Slider>
            <Categories></Categories>
            <SpecialOffers></SpecialOffers>
            <NewRelease></NewRelease>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}

export default Home