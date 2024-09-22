import Image from "next/image";
import React from "react";

export default function ModalInterchange() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Modal Interchange</h1>
      <div className="flex flex-row">
        <Image
          className="theory-image"
          src={"/Theory/matrix1.png"}
          width={600}
          height={500}
          alt="matrix1"
        />
        <Image
          className="theory-image"
          src={"/Theory/matrix2.png"}
          width={600}
          height={500}
          alt="matrix2"
        />
      </div>
    </div>
  );
}
