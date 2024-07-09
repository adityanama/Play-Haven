import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';
import Cart from './pages/Cart';
import VerifyEmail from './pages/VerifyEmail';
import Account from './pages/Account';
import ForgotPassword from './pages/ForgotPassword';
import { useEffect } from 'react';
import { getUserDetails } from './services/operations/profileAPI';
import { useDispatch } from 'react-redux';
import EditAccount from './pages/EditAccount';
import UpdatePassword from './pages/UpdatePassword';

function App() {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (localStorage.getItem("token")) {
            const token = JSON.parse(localStorage.getItem("token"));
            dispatch(getUserDetails(token, navigate));
        }
    }, [])

    return (
        <div className='wrapper'>
            <Navbar/>   
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/LogIn' element={<SignIn />} />
                <Route path='/account/SignUp' element={<SignUp />} />
                <Route path='/store' element={<Shop />} />
                <Route path='/store/game/:gameTitle' element={<GameInfo />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/account/verify-email' element={<VerifyEmail />} />
                <Route path='/update-password/:token' element = {<UpdatePassword/>}/>
                <Route path='/account/' element = {<Account/>}/>
                <Route path='/account/edit' element = {<EditAccount/>}/>
                <Route path='/account/forgot-password' element = {<ForgotPassword/>}/>
            </Routes>
        </div>
    );
}

export default App;
