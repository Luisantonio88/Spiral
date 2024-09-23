import Image from "next/image";
import React from "react";

export default function MajorScale() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Major Scale</h1>
      <h2>C Major Scale</h2>
      <Image
        className="theory-image"
        src={"/Theory/majorscale.png"}
        width={700}
        height={500}
        alt="majorscale"
      />
      <h2>G Major Scale</h2>

      <Image
        className="theory-image"
        src={"/Theory/majorscaleg.png"}
        width={700}
        height={500}
        alt="majorscaleg"
      />
      <h2>F Major Scale</h2>

      <Image
        className="theory-image"
        src={"/Theory/majorscalef.png"}
        width={700}
        height={500}
        alt="majorscalef"
      />
    </div>
  );
}
