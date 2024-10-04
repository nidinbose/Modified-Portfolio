import './css/port.css';
import React, { useEffect, useState } from 'react';
import { motion ,useAnimation} from 'framer-motion';


import About from './About';
import Skills from './Skills';
import Service from './Services';
import Projects from './Projects';
import Contact from './ContactMe';
import {FiDownload} from 'react-icons/fi';
import Social from '../Ui/social';
import Pic from '../Ui/pic';
import Header from './Header';
import { Link } from 'react-router-dom';
import Apps from '../additionals/Arrow3D';
import ComputerRoom from '../Ui/Tport';
export { FiDownload } from 'react-icons/fi';


const TypingEffect = ({ words, typingSpeed, deletingSpeed }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleType = () => {
      setCurrentWord(words[index]);
      if (isDeleting) {
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setSubIndex((prev) => prev + 1);
        if (subIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(
      handleType,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, typingSpeed, deletingSpeed, index, words, currentWord.length]);

  return (
    <h1 id="typewriter" className="text-2xl font-semibold ml-1 mt-5 hover:text-emerald-400 font-mono text-white">
      {currentWord.substring(0, subIndex)}
    </h1>
  );
};

const Cv = [
  {
      icon: <FiDownload />,
      path: '',
  },
];


// Port Component
const Port = () => {
  const words = ["Full Stack Web Developer.", "Ui/Ux Designer", "Graphic-Designer"];
  const typingSpeed = 300;
  const deletingSpeed = 150;

  
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
      {/* Navbar */}
    <Header/>

      {/* Namephoto Section */}
     
      <section className='h-full xl:mt-[60px]'>
        <div className="container mx-auto h-full  ">

          <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
            <div className='text-center xl:text-left items-center '>
              <span></span>
              <h1 className='mb-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mr-9 font-mono'>Hello I'm <br />
              <span className='font-extrabold text-emerald-400'>Nidin Bose...</span></h1>
              <TypingEffect words={words} typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} />

              <p className='max-w-[500px] mb-9 hover:text-emerald-400 font-mono text-white/60 mt-4 '>
                   I excel at crafting elegant digital experiences and
                   I am proficient in various programming languages and technologies
               </p>
              {/* button socials */}
              <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Link
            href={Cv[0].path}
            download
            className="uppercase flex items-center gap-2 bg-transparent border-emerald-400 hover:bg-emerald-400 border-2 text-white font-bold py-2 px-4 rounded-full mt-5 ease-out duration-300 font-mono mb-4"
        >
            <span>Download CV</span>
            {Cv[0].icon}
        </Link>
                <div className='mb-8 xl:mb-0'>
                  <Social className="flex gap-6 w-9 h-9 border border-emerald-400 rounded-full flex justify-center items-center text-emerald-400 text-base hover:transition-all duration-500 mt-4 "/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div>

              <Pic/>
            </div>
          </div>

        </div>
      </section>


       {/* Projects Section */}
       <div className="projects w-full xl:mt-[200px]">
        {/* <h1 className="text-white text-5xl">Projects</h1> */}
        {/* <p>ahdsvjdb</p> */}
        <Projects/>
      </div>

        
          {/* Services Section */}
      <div className="service xl:mt-[100px] w-full ">
             
        <Service />
      </div>

          
            {/* Skills Section */}
      <div className="container xl:mt-230px] flex flex-col justify-center items-center w-full xl:mt-[400px]">
      <h1 className="text-white text-5xl font-bold font-mono xl:mb-[30px] xl:mr-[790px] hover:text-emerald-400 mb-20">Skills</h1>
      
        <div className="text-center xl:mt-20">
          <Skills />
        </div>
      </div>



      {/* About Me Section */}
      <div className="about text-white text-left flex flex-col items-center font-mono xl:mt-[250px]">
      
          
        <div className="grid gap-4 w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <About />
        </div>
       
      </div>


    
{/* <Apps/> */}
    

     
      {/* contact */}
        <div className='xl:mt-[00px] '>
          <h1 className='text-5xl font-bold font-mono text-white hover:text-emerald-400 mb-20'>Contact me..</h1>
          <Contact/>
          {/* <ComputerRoom/> */}
        </div>
             
    </div>
  );
};

export default Port;

