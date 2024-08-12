// Particles.tsx
import React, { useMemo } from 'react';
import { Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';

extend({ Points, BufferGeometry, BufferAttribute, PointsMaterial });

const Particles: React.FC = () => {
  const { size } = useThree();
  const count = 1000;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, [count]);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={count} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
};

export default Particles;
