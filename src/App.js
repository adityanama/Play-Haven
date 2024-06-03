import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import Categories from './components/Categories';
import SpecialOffers from './components/SpecialOffers';
import GameData from './GamesData';
import NewRelease from './components/NewRelease';
import PreOrder from './components/PreOrder';

function App() {
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Slider GameData = {GameData}></Slider>
            <Categories></Categories>
            <SpecialOffers></SpecialOffers>
            <NewRelease></NewRelease>
            <PreOrder></PreOrder>
        </div>
    );
}

export default App;
