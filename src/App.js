import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './components/Slider';
import GamesData from './SliderData';
import Categories from './components/Categories';

function App() {
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Hero></Hero>
            <Slider GamesData = {GamesData}></Slider>
            <Categories></Categories>
        </div>
    );
}

export default App;
