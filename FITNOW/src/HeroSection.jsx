import React from 'react';

const HeroSection = () => {
  return (
    <div className=" bg-gray-900  flex-wrap ">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          WORK WITH PROFESSIONALS
        </h1>
        <p className="text-gray-400 mb-8">
          Lorem ipsum dolor sit amet consectetur. Neque dolor in semper aliquet lacisis tristique placerat sit.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-[#cdec69] hover:bg-[#bde25e] text-gray-900 font-semibold py-2 px-8 rounded-full">
            START NOW
          </button>
          <button className="bg-gray-700/50 hover:bg-gray-600 text-white font-semibold py-2 px-8 rounded-full">
            LEARN MORE
          </button>
        </div>
      </div>
        <div className="bg-[#cdec69] text-gray-900  py-4 ">
          <p className='text-3xl w-full font-bold text-nowrap'>
            CONVENIENT  LOCATION  &  SCHEDULE  DRAWING  UP  AN  INDIVIDUAL  TRAINING  PROGRAM  BEST  PROFESSIONAL
          </p>
        </div>
    </div>
  );
};

export default HeroSection;