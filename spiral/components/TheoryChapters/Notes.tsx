import Image from "next/image";
import React from "react";

export default function Notes() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Notes</h1>
      <h2>12 notes in music</h2>
      <Image
        className="theory-image"
        src={"/Theory/notes.png"}
        width={700}
        height={500}
        alt="notes"
      />
      <h2>Flats</h2>
      <Image
        className="theory-image"
        src={"/Theory/flat.png"}
        width={700}
        height={500}
        alt="flats"
      />
      <h2>Sharps</h2>
      <Image
        className="theory-image"
        src={"/Theory/sharp.png"}
        width={700}
        height={500}
        alt="sharps"
      />
    </div>
  );
}
