import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const AccountMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

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
                src="https://img.icons8.com/?size=100&id=15265&format=png&color=FFFFFF"
                alt="Account"
                className="w-12 h-12 rounded-full cursor-pointer"
                onClick={toggleMenu}
            />
            {menuOpen && (
                <div className="absolute -right-16 top-16 mt-2 w-[220px] bg-[rgb(2,2,36)] border border-gray-300 rounded-lg shadow-lg text-lg">
                    <Link to={'/account/LogIn'} className="block p-4 text-white hover:bg-[#256bc2]" onClick={() => setMenuOpen(false)}>Sign In</Link>
                    <Link to={'/account/SignUp'} className="block p-4 text-white hover:bg-[#256bc2]" onClick={() => setMenuOpen(false)}>Create New Account</Link>
                </div>
            )}
        </div>
    );
};

export default AccountMenu;
