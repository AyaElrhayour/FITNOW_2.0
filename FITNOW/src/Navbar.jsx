import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-white font-bold text-xl">FITNOW</div>
        <div className="flex space-x-4 text-gray-400">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Shop</a>
          <a href="#" className="hover:text-white">Blog</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;