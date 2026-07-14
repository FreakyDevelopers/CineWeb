"use client";

import { Html, useGLTF } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";
import type { Vector3Tuple } from "three";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

type ModelLoaderProps = {
  url: string;
  position?: Vector3Tuple;
  scale?: number | Vector3Tuple;
};

function LoadingOverlay() {
  return (
    <Html center>
      <div className="rounded-md border border-white/10 bg-zinc-950/85 px-4 py-3 text-center text-sm text-zinc-100 shadow-xl backdrop-blur">
        <div className="mx-auto mb-2 h-5 w-5 animate-spin rounded-full border-2 border-zinc-500 border-t-sky-300" />
        <p className="whitespace-nowrap font-medium">Loading 3D model</p>
      </div>
    </Html>
  );
}

function LoadedModel({ url, position = [0, 0, 0], scale = 1 }: ModelLoaderProps) {
  const { scene } = useGLTF(url);

  const shadowReadyScene = useMemo(() => {
    const modelScene = clone(scene);

    modelScene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return modelScene;
  }, [scene]);

  return <primitive object={shadowReadyScene} position={position} scale={scale} />;
}

export default function ModelLoader(props: ModelLoaderProps) {
  return (
    <Suspense fallback={<LoadingOverlay />}>
      <LoadedModel {...props} />
    </Suspense>
  );
}
