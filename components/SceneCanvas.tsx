"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function SceneCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [3, 3, 5], fov: 50 }}
      className="h-full w-full"
    >
      <ambientLight intensity={0.45} />
      <directionalLight
        castShadow
        intensity={1.5}
        position={[4, 6, 4]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color="#e8f838" roughness={0.45} />
      </mesh>
      <OrbitControls enableDamping />
    </Canvas>
  );
}
