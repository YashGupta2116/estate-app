import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const navItems = [
  {name: 'Home', path: '/'},
  {name: 'About', path: '/about'},
  {name: 'Contact', path: '/contact'},
  {name: 'Agents', path: '/agents'},
];

const NavBar = () => {
  return (
    <nav className='max-w-[80vw] mx-auto h-16 flex items-center justify-between py-4 px-6 md:px-12'>
      {/* Logo */}
      <div className='text-2xl font-bold text-gray-900'>
        <Link to='/'>EstateScape</Link>
      </div>

      {/* Navigation */}
      <div className='hidden md:flex gap-8'>
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({isActive}) =>
              `font-medium transition-all duration-300 ${
                isActive
                  ? 'text-black font-semibold'
                  : 'text-gray-600 hover:text-black'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className='hidden md:flex gap-4'>
        <Link
          to='/signin'
          className='text-gray-600 font-medium mt-2 hover:text-black transition-all'
        >
          Sign in
        </Link>
        <Link
          to='/signup'
          className='bg-yellow-500 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition-all'
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
