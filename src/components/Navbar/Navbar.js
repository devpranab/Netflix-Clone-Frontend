import React from 'react';
import Logo from '../../media/images/Logo.png';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 w-full z-[100] absolute">
            <img className="w-32" src={Logo} alt=""/>
            <div>
                <button className="text-white pr-4">Sign In</button>
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign Up</button>
            </div>
        </div>
    );
};

export default Navbar;