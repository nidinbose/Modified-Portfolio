import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Room = () => {
  return (
    <group>
      {/* Room walls */}
      <mesh position={[0, 1.5, -5]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial color="lightgrey" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, -0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[10, 10]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

const Desk = () => {
  return (
    <group position={[0, 0, -2]}>
      {/* Desk top */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 0.1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      {/* Desk legs */}
      <mesh position={[-0.9, 0.5, -0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.9, 0.5, -0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.9, 0.5, 0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[0.9, 0.5, 0.4]}>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

const Computer = () => {
  return (
    <group position={[0, 1.2, 0]}>
      {/* Monitor */}
      <mesh position={[0, 0.3, -0.4]}>
        <boxGeometry args={[0.6, 0.4, 0.05]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Monitor stand */}
      <mesh position={[0, 0, -0.4]}>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Keyboard */}
      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
};

function Apps() {
  return (
    <div className="h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} />
        <Room />
        <Desk />
        <Computer />
        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
}

export default Apps;

