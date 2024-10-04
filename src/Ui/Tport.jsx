import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Plane, Sphere, Box } from '@react-three/drei';
import { motion } from 'framer-motion';

const ComputerRoom = () => {
  return (
    <motion.section className='w-full relative h-screen mx-auto bg-gray-100'>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={1} />

        {/* Room Floor */}
        <Plane args={[10, 10]} rotation={[-Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={'#b0b0b0'} />
        </Plane>

        {/* Computer Desk */}
        <Box position={[-1, 0.5, 0]} args={[2, 0.1, 1]} receiveShadow>
          <meshStandardMaterial color={'#8B4513'} />
        </Box>

        {/* Monitor */}
        <Box position={[-1, 1, -0.6]} args={[0.8, 0.5, 0.1]} receiveShadow>
          <meshStandardMaterial color={'#000'} />
        </Box>

        {/* Mouse */}
        <Sphere position={[-1.5, 0.3, -0.7]} args={[0.1, 32, 32]} receiveShadow>
          <meshStandardMaterial color={'#555'} />
        </Sphere>

        {/* Chair */}
        <Box position={[-2, 0.5, 0]} args={[0.3, 0.6, 0.3]} receiveShadow>
          <meshStandardMaterial color={'#000'} />
        </Box>

        {/* CPU */}
        <Box position={[-1, 0.5, 0.6]} args={[0.4, 0.5, 0.3]} receiveShadow>
          <meshStandardMaterial color={'#C0C0C0'} />
        </Box>

        {/* Controls to move around the scene */}
        <OrbitControls />
      </Canvas>
    </motion.section>
  );
};

export default ComputerRoom;
