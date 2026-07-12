"use client";

import dynamic from "next/dynamic";

const SceneCanvas = dynamic(() => import("@/components/SceneCanvas"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-screen bg-zinc-950">
      <SceneCanvas />
    </main>
  );
}
