import Image from "next/image";
import React from "react";

export default function UpperStructures() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Upper Structures</h1>
      <div className="flex flex-row">
        <Image
          className="theory-image"
          src={"/Theory/matrix3.png"}
          width={600}
          height={500}
          alt="matrix1"
        />
        <Image
          className="theory-image"
          src={"/Theory/matrix4.png"}
          width={600}
          height={500}
          alt="matrix2"
        />
      </div>
      <div className="flex flex-row">
        <Image
          className="theory-image"
          src={"/Theory/tablafinal1.jpg"}
          width={600}
          height={500}
          alt="matrix1"
        />
        <Image
          className="theory-image"
          src={"/Theory/tablafinal2.jpg"}
          width={600}
          height={500}
          alt="matrix2"
        />
      </div>
    </div>
  );
}
