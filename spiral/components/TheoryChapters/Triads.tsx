import Image from "next/image";
import React from "react";

export default function Triads() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Triads</h1>
      <table className="mt-12 mb-8 shadow-md shadow-cyan-500 rounded-xl">
        <tr>
          <th className="p-4">Major</th>
          <th className="p-4">Minor</th>
          <th className="p-4">Diminished</th>
          <th className="p-4">Augmented</th>
        </tr>
        <tr>
          <td>Root </td>
          <td>Root </td>
          <td>Root </td>
          <td>Root </td>
        </tr>
        <tr>
          <td> Major Third</td>
          <td> Minor Third </td>
          <td> Minor Third </td>
          <td> Major Third </td>
        </tr>
        <tr>
          <td> Perfect Fifth</td>
          <td> Perfect Fifth</td>
          <td> Diminished Fifth</td>
          <td> Augmented Fifth</td>
        </tr>
        <tr>
          <td>R 3 5</td>
          <td>R b3 5</td>
          <td>R b3 b5</td>
          <td>R b3 #5</td>
        </tr>
        <tr>
          <td>
            <Image
              className="theory-image"
              src={"/Theory/cmajortriad.png"}
              width={160}
              height={160}
              alt="minorscalec"
            />
          </td>
          <td>
            <Image
              className="theory-image"
              src={"/Theory/cminortriad.png"}
              width={160}
              height={160}
              alt="minorscalec"
            />
          </td>
          <td>
            <Image
              className="theory-image"
              src={"/Theory/cdimtriad.png"}
              width={160}
              height={160}
              alt="minorscalec"
            />
          </td>
          <td>
            <Image
              className="theory-image"
              src={"/Theory/caugtriad.png"}
              width={160}
              height={160}
              alt="minorscalec"
            />
          </td>
        </tr>
      </table>
      <h2>C Harmonics</h2>

      <Image
        className="theory-image"
        src={"/Theory/charmonics.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />
      <h2>C Triads</h2>

      <Image
        className="theory-image"
        src={"/Theory/ctriads.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />
      <h2>F Triads</h2>

      <Image
        className="theory-image"
        src={"/Theory/ftriads.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />
      <h2>D Triads</h2>

      <Image
        className="theory-image"
        src={"/Theory/dtriads.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />
    </div>
  );
}
