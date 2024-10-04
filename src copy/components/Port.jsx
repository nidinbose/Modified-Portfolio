import './css/port.css';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Photo';
import About from './About';
import Skills from './Skills';
import Service from './Services';
import Projects from './Projects';
import Contact from './ContactMe';
import {FiDownload} from 'react-icons/fi';
export { FiDownload } from 'react-icons/fi';

// TypingEffect Component
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
    <h1 id="typewriter" className="text-2xl font-semibold ml-1 mt-5 hover:text-emerald-400 font-mono">
      {currentWord.substring(0, subIndex)}
    </h1>
  );
};

// Port Component
const Port = () => {
  const words = ["Full Stack Web Developer.", "Ui/Ux Designer", "Graphic-Designer"];
  const typingSpeed = 300;
  const deletingSpeed = 150;

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 ">
      {/* Navbar */}
      <Navbar />

      {/* Namephoto Section */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center h-auto py-8 mt-20 gap-y-8 lg:gap-y-0 lg:gap-x-20">
        <div className="text-white text-center lg:text-left mb-10 lg:ml-20">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mr-9 font-mono">
            Hello I'
            <span className="text-emerald-400">m</span>
            <br />
            <span className="text-5xl sm:text-6xl md:text-7xl mt-1 font-extrabold text-emerald-400">Nidin Bose..</span>
          </h1>

          <TypingEffect words={words} typingSpeed={typingSpeed} deletingSpeed={deletingSpeed} />

          <p className="mt-6 hover:text-emerald-400 font-mono">
            I have declared a semblance to have a lot <br />
            of having things like you mentioned <br />
            with a significant level of intricacies. <br />
            That’s quite an interesting description!
          </p>

          <button className="bg-transparent border-emerald-400 hover:bg-emerald-400 border-2 text-white font-bold py-2 px-4 rounded-full mt-5 ease-out duration-300 font-mono">
            Download CV
          </button>

          <div className="social flex flex-col sm:flex-row sm:justify-center p-4">
            <div className="icones flex flex-col sm:flex-row items-start sm:items-center sm:justify-center gap-3 mt-5 sm:mt-0">
              <a href="" className="flex items-center justify-center w-9 h-9 border-2 border-emerald-400 hover:border-white rounded-full hover:bg-emerald-400 transition duration-300">
                <i className="bi bi-instagram text-1xl"></i>
              </a>
              <a href="" className="flex items-center justify-center w-9 h-9 border-2 border-emerald-400 hover:border-white rounded-full hover:bg-emerald-400 transition duration-300">
                <i className="bi bi-github text-1xl"></i>
              </a>
              <a href="" className="flex items-center justify-center w-9 h-9 border-2 border-emerald-400 hover:border-white rounded-full hover:bg-emerald-400 transition duration-300">
                <i className="bi bi-linkedin text-1xl"></i>
              </a>
              <a href="" className="flex items-center justify-center w-9 h-9 border-2 border-emerald-400 hover:border-white rounded-full hover:bg-emerald-400 transition duration-300">
                <i className="bi bi-youtube text-1xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center mb-20">
          <motion.div className="photo relative z-15 mb-12">
            <img src="./images/b.png" alt="" className="object-contain mix-blend-screen w-auto h-96 mb-12 xl:ml-[150px]" />
          </motion.div>

          <motion.svg className="absolute w-[300px] xl:w-[406px] h-[300px] xl:h-[406px] right-0" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              fill="transparent"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </div>
      </div> */}


      <section className='h-full'>
        <div className="container mx-auto h-full">

          <div className='flex flexcol xl:flex-row items-center justify-between xl:pt-8  xl:pb-24'>
            <div className='text-center xl:text-left '>
              <span></span>
              <h1 className='mb-6 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 mr-9 font-mono'>Hello I'm <br />
              <span>Nidin Bose</span></h1>

              <p className='max-w-[500px] mb-9 '>i am at crafting elegant </p>
              {/* button socials */}
              <div className='flex flex-col xl:flex-row items-center gap-8'>
                <button className="uppercase flex items-center gap-2 bg-transparent border-emerald-400 hover:bg-emerald-400 border-2 text-white font-bold py-2 px-4 rounded-full mt-5 ease-out duration-300 font-mono">
                  <span>Downlord CV</span>
                  <FiDownload className='text-xl '/>
                </button>
                <div className='mb-8 xl:mb-0'>
                  
                </div>
              </div>
            </div>
            {/* photo */}
            <div>photo</div>
          </div>

        </div>
      </section>

      {/* About Me Section */}
      <div className="about text-white text-left flex flex-col items-center font-mono xl:mt-[250px]">
        <h1 className="text-left text-5xl font-mono hover:text-emerald-400 xl:pr-[670px]">
          Abo<span className="text-emerald-400 hover:text-red-500 ">ut</span> me
        </h1>
          
        <div className="grid gap-4 w-full p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
          <About />
        </div>
      </div>

      {/* Skills Section */}
      <div className="container xl:mt-[130px] flex flex-col justify-center items-center w-full">
      <h1 className="text-white text-5xl font-bold font-mono mb-8 xl:mr-[790px] hover:text-emerald-400">Skills</h1>
        <div className="text-center xl:mt-20">
          <Skills />
        </div>
      </div>

      {/* Services Section */}
      <div className="service xl:mt-[300px] w-full">
        <h1 className="text-white text-5xl font-bold font-mono mb-8 ml-7 hover:text-emerald-400">Services</h1>
        <hr className="xl:w-96 xl:mb-[150px] xl:ml-7" />
        <Service />
      </div>

      {/* Projects Section */}
      <div className="projects w-full">
        {/* <h1 className="text-white text-5xl">Projects</h1> */}
        {/* <p>ahdsvjdb</p> */}
        <Projects/>
      </div>
      {/* contact */}
        <div>
          <Contact/>
        </div>
             
    </div>
  );
};

export default Port;

