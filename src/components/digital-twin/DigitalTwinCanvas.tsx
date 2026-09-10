'use client';

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Patient, OrganName, OrganHealth } from '@/types';

// Helper to get color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Healthy': return '#10b981';
    case 'Warning': return '#f59e0b';
    case 'Moderate Risk': return '#f97316';
    case 'Critical': return '#ef4444';
    default: return '#06b6d4';
  }
};

interface OrganProps {
  name: OrganName;
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  onClick: (name: OrganName) => void;
  selected: boolean;
  shape: 'box' | 'sphere' | 'cylinder';
}

const Organ = ({ name, position, scale, color, onClick, selected, shape }: OrganProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      if (name === 'Heart') {
        // Subtle beating animation
        const pulse = 1 + Math.sin(state.clock.elapsedTime * 5) * 0.05;
        meshRef.current.scale.set(scale[0] * pulse, scale[1] * pulse, scale[2] * pulse);
      } else if (name === 'Lungs') {
        // Breathing animation
        const breath = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;
        meshRef.current.scale.set(scale[0] * breath, scale[1], scale[2] * breath);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      scale={scale}
      onClick={(e) => { e.stopPropagation(); onClick(name); }}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }}
      onPointerOut={(e) => { setHovered(false); document.body.style.cursor = 'auto'; }}
    >
      {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
      {shape === 'sphere' && <sphereGeometry args={[1, 32, 32]} />}
      {shape === 'cylinder' && <cylinderGeometry args={[1, 1, 1, 32]} />}
      
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={selected ? 0.9 : (hovered ? 0.7 : 0.4)} 
        roughness={0.2}
        metalness={0.5}
        emissive={color}
        emissiveIntensity={selected ? 0.5 : (hovered ? 0.2 : 0)}
      />

      {/* Label for selected organ */}
      {selected && (
        <Html position={[0, 1.5, 0]} center>
          <div className="px-3 py-1 bg-black/80 backdrop-blur-md text-foreground rounded-full text-xs whitespace-nowrap border border-white/20">
            {name}
          </div>
        </Html>
      )}
    </mesh>
  );
};

export const DigitalTwinCanvas = ({ 
  patient, 
  onOrganSelect 
}: { 
  patient: Patient;
  onOrganSelect: (organ: OrganHealth | null) => void;
}) => {
  const [selectedOrgan, setSelectedOrgan] = useState<OrganName | null>(null);

  const handleOrganClick = (name: OrganName) => {
    if (selectedOrgan === name) {
      setSelectedOrgan(null);
      onOrganSelect(null);
    } else {
      setSelectedOrgan(name);
      const organData = patient.organs.find(o => o.name === name) || null;
      onOrganSelect(organData);
    }
  };

  // Generate abstract body silhouette
  const bodyMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#0ea5e9',
    transparent: true,
    opacity: 0.1,
    roughness: 0.5,
    metalness: 0.8,
    side: THREE.DoubleSide
  }), []);

  return (
    <div className="w-full h-full min-h-[400px] relative bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-inner border border-border-main">
      
      {/* Background UI Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <color attach="background" args={['transparent']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#06b6d4" />
        
        <OrbitControls 
          enablePan={false} 
          minPolarAngle={Math.PI / 4} 
          maxPolarAngle={Math.PI / 1.5}
          minDistance={4}
          maxDistance={12}
        />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <group position={[0, -1, 0]}>
            {/* Abstract Body Shape (Head, Torso, Limbs) */}
            <mesh position={[0, 4, 0]} material={bodyMaterial}>
              <sphereGeometry args={[0.7, 32, 32]} />
            </mesh>
            <mesh position={[0, 2, 0]} material={bodyMaterial}>
              <capsuleGeometry args={[1, 2, 4, 16]} />
            </mesh>
            <mesh position={[-1.5, 2, 0]} rotation={[0, 0, -0.2]} material={bodyMaterial}>
              <capsuleGeometry args={[0.3, 1.5, 4, 16]} />
            </mesh>
            <mesh position={[1.5, 2, 0]} rotation={[0, 0, 0.2]} material={bodyMaterial}>
              <capsuleGeometry args={[0.3, 1.5, 4, 16]} />
            </mesh>

            {/* Interactive Organs */}
            <Organ 
              name="Brain"
              position={[0, 4, 0]}
              scale={[0.5, 0.4, 0.5]}
              shape="sphere"
              color={getStatusColor(patient.organs.find(o => o.name === 'Brain')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Brain'}
            />
            
            {/* Lungs */}
            <Organ 
              name="Lungs"
              position={[-0.4, 2.5, 0.1]}
              scale={[0.3, 0.6, 0.4]}
              shape="cylinder"
              color={getStatusColor(patient.organs.find(o => o.name === 'Lungs')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Lungs'}
            />
            <Organ 
              name="Lungs"
              position={[0.4, 2.5, 0.1]}
              scale={[0.3, 0.6, 0.4]}
              shape="cylinder"
              color={getStatusColor(patient.organs.find(o => o.name === 'Lungs')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Lungs'}
            />

            {/* Heart */}
            <Organ 
              name="Heart"
              position={[0, 2.3, 0.3]}
              scale={[0.3, 0.3, 0.3]}
              shape="sphere"
              color={getStatusColor(patient.organs.find(o => o.name === 'Heart')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Heart'}
            />

            {/* Liver */}
            <Organ 
              name="Liver"
              position={[0.3, 1.8, 0]}
              scale={[0.5, 0.3, 0.4]}
              shape="sphere"
              color={getStatusColor(patient.organs.find(o => o.name === 'Liver')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Liver'}
            />

            {/* Kidneys */}
            <Organ 
              name="Kidneys"
              position={[-0.3, 1.5, -0.2]}
              scale={[0.2, 0.3, 0.2]}
              shape="sphere"
              color={getStatusColor(patient.organs.find(o => o.name === 'Kidneys')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Kidneys'}
            />
            <Organ 
              name="Kidneys"
              position={[0.3, 1.5, -0.2]}
              scale={[0.2, 0.3, 0.2]}
              shape="sphere"
              color={getStatusColor(patient.organs.find(o => o.name === 'Kidneys')?.status || 'Healthy')}
              onClick={handleOrganClick}
              selected={selectedOrgan === 'Kidneys'}
            />

          </group>
        </Float>
      </Canvas>
      
      {/* UI Overlay */}
      <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full text-foreground text-xs font-medium border border-white/20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
        Live Biometrics
      </div>
    </div>
  );
};
