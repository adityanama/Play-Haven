import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import GamesData from './SliderData';
import Categories from './components/Categories';
import SpecialOffers from './components/SpecialOffers';

function App() {
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Slider GamesData = {GamesData}></Slider>
            <Categories></Categories>
            <SpecialOffers></SpecialOffers>
        </div>
    );
}

export default App;
