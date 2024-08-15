import React from 'react';
import LK from '../components/Images/LK.png';

const Header: React.FC = () => {
  
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Left Section */}
        <nav className="flex space-x-8 items-center "> 
          <button className="border border-blue-500 text-blue-500 px-4 py-2 hover:bg-blue-50">
            Home
          </button>
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        
        {/* Logo */}
        <a href="/" className="flex items-center">
        <image
          src={LK}
          alt="LK"
          className="rounded-lg object-cover w-full h-auto"
        />
        </a>

        {/* Right Section */}
        <nav className="flex space-x-8 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-800">Pages</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Free Version</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Purchase</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
