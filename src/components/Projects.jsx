import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
import "swiper/css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from 'three';
import 'swiper/css';

// Project data
const projects = [
  {
    num: '01',
    category: 'Book My Show',
    title: 'Project1',
    description: 'HTML 5, CSS 3, Javascript, Node Js, MongoDB, Express',
    stack: [{ name: "Full stack project without React" }],
    image: '/images/bo.webp',
  },
  {
    num: '02',
    category: 'Allen Solly Clone',
    title: 'Project2',
    description: 'HTML, CSS',
    stack: [{ name: "Front-End Project" }],
    image: '/images/az.png',
  },
  {
    num: '03',
    category: 'Odin Project Site',
    title: 'Project3',
    description: 'Using HTML, CSS',
    stack: [{ name: "Front-end Project" }],
    image: '/images/o.jpg',
  }
];

// 3D Rotating Cube component using Three.js
const Project3DImage = ({ imageUrl }) => {
  const texture = useTexture(imageUrl);

  return (
    <mesh rotation={[0.5, 0.5, 0]} scale={1.5}>
      {/* Use BoxGeometry instead of BoxBufferGeometry */}
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const HandleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[100vh] flex flex-col justify-center py-12 xl:px-0"
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
                {project.category}
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
                  <div className="h-[460px] relative group flex justify-center items-center bg-transpar">
                    {/* 3D Project Image */}
                    <Canvas className="w-full h-full">
                      <ambientLight intensity={1.99} />
                      <directionalLight position={[2, 5, 2]} />
                      <Project3DImage imageUrl={project.image} />
                      <OrbitControls enableZoom={true} autoRotate={true} />
                    </Canvas>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
    
  );
};

export default Projects;
