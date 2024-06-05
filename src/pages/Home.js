import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import GameData from '../GamesData';
import NewRelease from '../components/NewRelease';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Slider GameData = {GameData}></Slider>
            <Categories></Categories>
            <SpecialOffers></SpecialOffers>
            <NewRelease></NewRelease>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    )
}

export default Home