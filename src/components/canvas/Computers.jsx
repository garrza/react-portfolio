import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = () => {
  const computer = useGLTF('./computer/computer2.glb');
  return (
    <mesh>
      <hemisphereLight intensity={2} 
      groundColor="black"/>
      <pointLight intensity={1}/>
      <primitive 
      object={computer.scene}
      scale={1.75}
      position={[0, -3, -1.8]}
      rotation={[-0.01, 0.05, 0.02 ]} />
      
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{ position: [20, 3, 10], fov: 20 }}
    gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}/> 
        <Computers/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}


export default ComputersCanvas