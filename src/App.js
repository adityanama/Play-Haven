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
import { useDispatch, useSelector } from 'react-redux';
import EditAccount from './pages/EditAccount';
import UpdatePassword from './pages/UpdatePassword';
import PrivateRoute from './components/PrivateRoute';
import { getTotalGames } from './services/operations/cartAPI';
import { setCartItems } from './Slices/profileSlice';
import AboutUs from './pages/Aboutus';
import Contact from './pages/Contact';

const App = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {token} = useSelector((state) => state.auth)

    const getCartLength = async(token) => {
        const len = await getTotalGames(token);
        dispatch(setCartItems(len))
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            const token = JSON.parse(localStorage.getItem("token"));
            dispatch(getUserDetails(token, navigate));

            getCartLength(token);
        }
    }, [token])

    return (
        <div className='wrapper'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/LogIn' element={<SignIn />} />
                <Route path='/account/SignUp' element={<SignUp />} />
                <Route path='/account/forgot-password' element={<ForgotPassword />} />
                <Route path='/account/verify-email' element={<VerifyEmail />} />
                <Route path='/update-password/:token' element={<UpdatePassword />} />
                <Route path='/store' element={<Shop />} />
                <Route path='/store/game/:gameTitle' element={<GameInfo />} />
                <Route path='/aboutUs' element = {<AboutUs/>} />
                <Route path='/contactUs' element = {<Contact/>} />

                <Route path='/cart' element={<PrivateRoute>
                                                <Cart />
                                            </PrivateRoute>} />
                                    
                <Route path='/account' element={<PrivateRoute>
                                                    <Account />
                                                </PrivateRoute>}/>

                <Route path='/account/edit' element={<PrivateRoute>
                                                        <EditAccount />
                                                    </PrivateRoute>} />

            </Routes>
        </div>
    );
}

export default App;
