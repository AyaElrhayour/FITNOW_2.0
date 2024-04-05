import React from 'react';



const HeroSection = () => {
  return (
    <div>
      <section className="hero-section bg-black text-white py-24 px-4 md:px-8 bg-cover bg-center" style={{backgroundImage: 'url(/src/assets/img3.jpg)'}}>
        <div className="hero-container max-w-5xl mx-auto flex flex-col items-center ">
          <div className="hero-content flex flex-col items-center gap-y-16 max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome back</h1>
       
            <button className="bg-[#cef15c] shadow-md shadow-[#d1f263] text-stone-700 font-bold py-3 px-8 rounded-full transition-colors duration-300" style={{ boxShadow: '0px 0px 10px 0px #d1f263' }}>
              Add Your Progress
            </button>
          </div>
          {/* <div className="hero-image w-64 md:w-80 mt-8 md:mt-0">
            <img src="/src/assets/img2.jpeg" alt="Hero" className="w-full h-auto rounded-md" />
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;