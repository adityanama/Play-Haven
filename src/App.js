import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';

function App() {

    return (
        <div className='wrapper'>
            <Navbar/>   
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/LogIn' element={<SignIn />} />
                <Route path='/account/SignUp' element={<SignUp />} />
                <Route path='/store' element={<Shop />} />
                <Route path='/store/game/:gameTitle' element={<GameInfo />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
