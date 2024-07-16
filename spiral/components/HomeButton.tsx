"use client";

import { useRouter } from "next/navigation";

export default function HomeButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="text-2xl font-extrabold text-cyan-500 hover:text-cyan-600 transition duration-500 rounded"
      >
        spiral
      </button>
      <button
        onClick={handleClick}
        className="font-extralight text-2xl text-cyan-600 hover:text-cyan-600 tracking-wider hover:tracking-widest transition-all duration-1000 ease-out"
      >
        harmony
      </button>
    </>
  );
}
