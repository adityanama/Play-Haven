import { Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {
    return (
        <div className='wrapper'>
            <Navbar></Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account/LogIn' element = {<SignIn/>}/>
                <Route path='/account/SignUp' element = {<SignUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
