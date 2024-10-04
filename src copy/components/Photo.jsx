import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transperent ">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 font-mono align-start">
        <a href="#" className="text-white text-4xl font-bold hover:text-emerald-400 mt-5 ml-20 font-mono ">
          <h1 className='xl:mr-[220px]'>NidinBose<span className='text-green-400 font-bold text-3xl hover:text-white'>.               </span></h1>
        </a>
        <div className="flex items-center lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:justify-center w-full lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-5">
            <li><a href="#" className="text-white block py-2 lg:py-0 hover:text-green-400 hover:border-b hover:border-emerald-400">Home</a></li>
            <li><a href="#" className="text-white block py-2 lg:py-0 hover:text-green-400 hover:border-b hover:border-emerald-400">Resume</a></li>
            <li><a href="#" className="text-white block py-2 lg:py-0 hover:text-green-400 hover:border-b hover:border-emerald-400">Services</a></li>
            <li><a href="#" className="text-white block py-2 lg:py-0 hover:text-green-400 hover:border-b hover:border-emerald-400">Contact</a></li>
            <li><a href="#"><button className='w-32 bg-transparent border-green-400 border-2 font-bold text-sm text-white rounded-xl h-9 hover:bg-gradient-to-r from-emerald-400 to-emerald-400 ease-in duration-300'>Hire me</button></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;