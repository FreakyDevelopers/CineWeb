"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

export default function SceneCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 5], fov: 50 }}
      className="h-full w-full"
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
      }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight
        castShadow
        intensity={1.5}
        position={[4, 6, 4]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" roughness={0.4} />
      </mesh>
      <OrbitControls enableDamping />
    </Canvas>
  );
}
