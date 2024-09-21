import Image from "next/image";
import React from "react";

export default function Modes() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Modes</h1>
      <Image
        className="theory-image"
        src={"/Theory/cionian.png"}
        width={700}
        height={500}
        alt="cionian"
      />
      <Image
        className="theory-image"
        src={"/Theory/ddorian.png"}
        width={700}
        height={500}
        alt="ddorian"
      />
      <Image
        className="theory-image"
        src={"/Theory/ephrygian.png"}
        width={700}
        height={500}
        alt="ephrygian"
      />
      <Image
        className="theory-image"
        src={"/Theory/flydian.png"}
        width={700}
        height={500}
        alt="flydian"
      />
      <Image
        className="theory-image"
        src={"/Theory/gmixo.png"}
        width={700}
        height={500}
        alt="gmixo"
      />
      <Image
        className="theory-image"
        src={"/Theory/aaeolian.png"}
        width={700}
        height={500}
        alt="aaeolian"
      />
      <Image
        className="theory-image"
        src={"/Theory/blocrian.png"}
        width={700}
        height={500}
        alt="blocrian"
      />
    </div>
  );
}
