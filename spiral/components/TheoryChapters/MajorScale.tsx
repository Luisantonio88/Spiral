import Image from "next/image";
import React from "react";

export default function MajorScale() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Major Scale</h1>
      <Image
        className="theory-image"
        src={"/Theory/majorscale.png"}
        width={700}
        height={500}
        alt="majorscale"
      />
      <Image
        className="theory-image"
        src={"/Theory/majorscaleg.png"}
        width={700}
        height={500}
        alt="majorscaleg"
      />
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
