import Image from "next/image";
import React from "react";

export default function Modes() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Modes</h1>
      <h2>C Ionian</h2>
      <Image
        className="theory-image"
        src={"/Theory/cionian.png"}
        width={700}
        height={500}
        alt="cionian"
      />
      <h2>D Dorian</h2>

      <Image
        className="theory-image"
        src={"/Theory/ddorian.png"}
        width={700}
        height={500}
        alt="ddorian"
      />
      <h2>E Phrygian</h2>

      <Image
        className="theory-image"
        src={"/Theory/ephrygian.png"}
        width={700}
        height={500}
        alt="ephrygian"
      />
      <h2>F Lydian</h2>

      <Image
        className="theory-image"
        src={"/Theory/flydian.png"}
        width={700}
        height={500}
        alt="flydian"
      />
      <h2>G Mixolydian</h2>

      <Image
        className="theory-image"
        src={"/Theory/gmixo.png"}
        width={700}
        height={500}
        alt="gmixo"
      />
      <h2>A Aeolian</h2>

      <Image
        className="theory-image"
        src={"/Theory/aaeolian.png"}
        width={700}
        height={500}
        alt="aaeolian"
      />
      <h2>B Locrian</h2>

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
