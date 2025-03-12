import React from 'react';
import {Navigate, Link} from 'react-router-dom';
import HomePage from '../pages/HomePage';

const NavBar = () => {
  return (
    <nav className='max-w-[85rem] mx-auto h-20 flex items-center justify-between px-8'>
      {/* Left Side - Logo */}
      <div className='font-extrabold text-2xl'>
        <Link to='/'>Estate Store</Link>
      </div>

      {/* Center - Navigation Links */}
      <div className='flex gap-12'>
        <div>
          <Link
            to='/'
            className='font-semibold text-lg !text-black cursor-pointer hover:!text-gray-600'
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to='/about'
            className='font-semibold text-lg !text-black cursor-pointer hover:!text-gray-600'
          >
            About
          </Link>
        </div>
        <div>
          <Link
            to='/contact'
            className='font-semibold text-lg !text-black cursor-pointer hover:!text-gray-600'
          >
            Contact
          </Link>
        </div>
        <div>
          <Link
            to='/agents'
            className='font-semibold text-lg !text-black cursor-pointer hover:!text-gray-600'
          >
            Agents
          </Link>
        </div>
      </div>

      {/* Right Side - Auth Buttons */}
      <div className='flex gap-5'>
        <button>
          <Link
            to='/signin'
            className='!text-black font-bold hover:!text-gray-700'
          >
            Sign in
          </Link>
        </button>
        <button className='bg-yellow-400 text-white px-5 py-2 rounded-md font-semibold  hover:bg-white hover:outline-2 hover:outline-yellow-400'>
          <Link to='/signup'>Sign Up</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
