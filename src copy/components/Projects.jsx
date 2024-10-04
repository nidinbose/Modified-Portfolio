import React, { useState } from "react";
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import { motion } from "framer-motion";
import "swiper/css"; 
import { BsArrowUpRight, BsGithub,  } from "react-icons/bs";
import { Link } from 'react-router-dom';
// import WorkSlideButtons from "./WorkSlideButtons";
// import CustomTooltip from './tooltip';

const projects = [
    {
        num: '01',
        category: 'front-end',
        title: 'project1',
        description: 'sdgreg bos ghyu njju',
        stack: [{ name: "html 5 " }, { name: "Css 3 " }, { name: "javascript " }],
        image: '/images/a.png', // Adjusted image path
        live: "",
        github: "",
    },
    {
        num: '02',
        category: 'front-end',
        title: 'project2',
        description: 'Another project description',
        stack: [{ name: "React " }, { name: "Tailwind CSS " }, { name: "Framer Motion " }],
        image: '/images/b.png', // Adjusted image path
        live: "",
        github: "",
    },
    {
        num: '03',
        category: 'front-end',
        title: 'project3',
        description: 'Yet another project description',
        stack: [{ name: "Vue " }, { name: "Sass " }, { name: "TypeScript " }],
        image: '/images/c.png', // Adjusted image path
        live: "",
        github: "",
    }
];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const HandleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto text-white">
                <h1 className="text-4xl font-bold mb-8">Projects</h1>
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            {/* Outline number */}
                            <div className="text-8xl leading-none font-extrabold text-outline font-mono">{project.num}</div>
                            {/* Project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-400 transition-all duration-500 capitalize font-mono">
                                {project.category} project
                            </h2>
                            {/* Project description */}
                            <p className="text-white/60 font-mono">{project.description}</p>
                            {/* Stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-emerald-400 font-mono">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            {/* Border */}
                            <div className="border border-white/20 my-4"></div>
                            {/* Buttons or links can go here */}
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={HandleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="text-white w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                        {/* Display project image */}
                                      <div className=""></div>
                                      {/* image */}
                                      <div className="h-full w-full relative">
                                      <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover "
                                        />
                                      </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                                <div className="flex space-x-2 xl:mt-20"> {/* Flexbox to align buttons horizontally */}
            <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-all">
               right
            </button>
            <button className="p-2 bg-emerald-800 rounded-md hover:bg-gray-700 transition-all text-white flex items-center space-x-2">
                <span>Swipe</span> {/* Corrected spelling of 'swpe' */}
                swipe left
            </button>
        </div>
                          
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Projects;
