import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';

function App() {
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/LogIn' element = {<SignIn/>}/>
                <Route path='/account/SignUp' element = {<SignUp/>}/>
                <Route path='/store' element = {<Shop/>}/>
                <Route path='/store/game/:gameTitle' element = {<GameInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;
