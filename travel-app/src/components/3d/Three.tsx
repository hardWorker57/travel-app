// // App.tsx
// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Mesh, BoxGeometry, MeshBasicMaterial } from 'three';

// const Box = () => {
//   return (
//     <mesh>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial color="orange"/>
//     </mesh>
//   );
// };

// const Three: React.FC = () => {
//   return (
//     <Canvas>
//       <ambientLight />
//       <pointLight position={[10, 10, 10]} />
//       <Box />
//       <OrbitControls />
//     </Canvas>
//   );
// };

// export default Three;
// App.tsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';
import Earth from './materials/Earth';
// import Particles from './materials/Particles';

const Three: React.FC = () => {
  return (
    <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
      <ambientLight intensity={3.8} />
      <pointLight position={[10, 10, 10]}  />
      <Earth />
      {/* <Particles /> */}
      <OrbitControls />
      {/* <Stars /> */}

      {/* <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default Three;
