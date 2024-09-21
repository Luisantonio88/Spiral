import Image from "next/image";
import React from "react";

export default function Notes() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Notes</h1>
      <Image
        className=" shadow shadow-cyan-500 rounded-lg mt-16 p-4"
        src={"/Theory/notes.png"}
        width={700}
        height={500}
        alt="notes"
      />
      <Image
        className=" shadow shadow-cyan-500 rounded-lg mt-16 p-4"
        src={"/Theory/flat.png"}
        width={700}
        height={500}
        alt="flats"
      />
      <Image
        className=" shadow shadow-cyan-500 rounded-lg mt-16 p-4"
        src={"/Theory/sharp.png"}
        width={700}
        height={500}
        alt="sharps"
      />
    </div>
  );
}
