// Earth.tsx
import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudRef = useRef<THREE.Mesh>(null);

  const [earthTexture, cloudTexture] = useLoader(TextureLoader, [
    'assets/8k_earth.jpg',  // Replace with your Earth texture path
    'assets/8k_clouds.jpg',  // Replace with your Cloud texture path
  ]);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.005; // Slow rotation of the Earth
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.009; // Slightly faster rotation for clouds
    }
  });

  return (
    <>
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshPhongMaterial map={earthTexture} />
      </mesh>

      <mesh ref={cloudRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.01, 32, 32]} />
        <meshPhongMaterial
          map={cloudTexture}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};

export default Earth;