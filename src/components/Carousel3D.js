import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const CarouselItem = ({ url, position, rotation }) => {
  const texture = useTexture(url);
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[3, 4]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent opacity={0.85} />
    </mesh>
  );
};

const Carousel = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const urls = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500'
  ];

  return (
    <group ref={groupRef}>
      {urls.map((url, i) => {
        const angle = (i / urls.length) * Math.PI * 2;
        const x = Math.sin(angle) * 6;
        const z = Math.cos(angle) * 6;
        return (
          <CarouselItem 
            key={i} 
            url={url} 
            position={[x, 0, z]} 
            rotation={[0, angle, 0]} 
          />
        );
      })}
    </group>
  );
};

export default function Carousel3D() {
  return (
    <div style={{ height: '100vh', width: '100%', position: 'relative', backgroundColor: '#000' }}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
          <ambientLight intensity={1} />
          <Carousel />
        </Canvas>
      </Suspense>
      <div style={{ position: 'absolute', bottom: '40px', width: '100%', textAlign: 'center', pointerEvents: 'none' }}>
        <p style={{ color: '#d4af37', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>Interactive Gallery</p>
        <h3 style={{ fontSize: '30px', fontFamily: 'serif', color: '#fff' }}>Explore the faces of the future.</h3>
      </div>
    </div>
  );
}
