import React from 'react';

const HomePage = () => {
  return (
    <div className='px-6 md:px-12 max-w-xl flex flex-col  items-center justify-center mx-auto mt-12'>
      {/* Hero Section */}
      <div className='text-center md:text-left'>
        <h1 className='text-4xl md:text-6xl font-bold text-gray-900'>
          Find Real Estate & Get Your Dream Place
        </h1>
        <p className='text-gray-600 mt-4 text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos explicabo
          suscipit cum eius.
        </p>
      </div>

      {/* Search Bar */}
      <div className='mt-6 bg-white shadow-md rounded-lg p-4 flex flex-col md:flex-row gap-4'>
        <button className='bg-black text-white px-6 py-2 rounded-md'>
          Buy
        </button>
        <button className='bg-gray-200 px-6 py-2 rounded-md'>Rent</button>
        <input
          type='text'
          placeholder='City Location'
          className='border border-gray-300 rounded-md px-4 py-2 flex-1'
        />
        <input
          type='text'
          placeholder='Min Price'
          className='border border-gray-300 rounded-md px-4 py-2 flex-1'
        />
        <input
          type='text'
          placeholder='Max Price'
          className='border border-gray-300 rounded-md px-4 py-2 flex-1'
        />
        <button className='bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-all'>
          Search
        </button>
      </div>

      {/* Statistics */}
      <div className='mt-12 flex justify-between text-center gap-20 text-gray-900'>
        <div>
          <h2 className='text-3xl font-bold'>16+</h2>
          <span className='text-gray-600'>Years of Experience</span>
        </div>
        <div>
          <h2 className='text-3xl font-bold'>200</h2>
          <p className='text-gray-600'>Awards Gained</p>
        </div>
        <div>
          <h2 className='text-3xl font-bold'>1200+</h2>
          <p className='text-gray-600'>Properties Ready</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
