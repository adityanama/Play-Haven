import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../services/operations/authAPI';

const AccountMenu = () => {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = () => {
        dispatch(logout(navigate))
        setMenuOpen(false)
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={menuRef}>
            <img
                src={!token ? "https://img.icons8.com/?size=100&id=15265&format=png&color=FFFFFF" : user.image}
                alt="Account"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={toggleMenu}
            />
            {menuOpen && !token &&
                <div className="absolute -right-16 top-16 mt-2 w-[220px] bg-[rgb(2,2,36)] border border-gray-300 rounded-lg shadow-lg text-lg">
                    <Link to={'/account/LogIn'} className="block p-4 text-white hover:bg-[#256bc2]" onClick={() => setMenuOpen(false)}>Log In</Link>
                    <Link to={'/account/SignUp'} className="block p-4 text-white hover:bg-[#256bc2]" onClick={() => setMenuOpen(false)}>Create New Account</Link>
                </div>
            }
            {
                menuOpen && token && <div className="absolute -right-16 top-16 mt-2 w-[220px] bg-[rgb(2,2,36)] border border-gray-300 rounded-lg shadow-lg text-lg">
                    <Link to={'/account/'} className="block p-4 text-white hover:bg-[#256bc2]" onClick={() => setMenuOpen(false)}>My Account</Link>
                    <button className="p-4 text-white hover:bg-[#256bc2] w-full text-left" onClick={handleClick}>Log Out</button>
                </div>
            }
        </div>
    );
};

export default AccountMenu;
