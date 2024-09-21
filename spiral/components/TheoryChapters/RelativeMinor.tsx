import Image from "next/image";
import React from "react";

export default function RelativeMinor() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Relative Minor</h1>
      <Image
        className="theory-image"
        src={"/Theory/minorscalea.png"}
        width={700}
        height={500}
        alt="minorscalea"
      />
      <Image
        className="theory-image"
        src={"/Theory/minorscalec.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />

      <div className="svg-container">
        <svg width="400" height="400" viewBox="0 0 400 400">
          <g transform="translate(200,200) rotate(15)">
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L180,0 A180,180 0 0,1 155.88,90 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L155.88,90 A180,180 0 0,1 90,155.88 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L90,155.88 A180,180 0 0,1 0,180 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L0,180 A180,180 0 0,1 -90,155.88 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L-90,155.88 A180,180 0 0,1 -155.88,90 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L-155.88,90 A180,180 0 0,1 -180,0 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L-180,0 A180,180 0 0,1 -155.88,-90 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L-155.88,-90 A180,180 0 0,1 -90,-155.88 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L-90,-155.88 A180,180 0 0,1 0,-180 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L0,-180 A180,180 0 0,1 90,-155.88 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L90,-155.88 A180,180 0 0,1 155.88,-90 Z"
              stroke-width="2"
              stroke="white"
            ></path>
            <path
              className="fill-current text-cyan-300 transition-colors duration-500 hover:text-cyan-500 active:text-cyan-100"
              d="M0,0 L155.88,-90 A180,180 0 0,1 180,0 Z"
              stroke-width="2"
              stroke="white"
            ></path>
          </g>
        </svg>
        <div className="circle-text n1">E-</div>
        <div className="circle-text n2">B-</div>
        <div className="circle-text n3">F#-</div>
        <div className="circle-text n4">C#-</div>
        <div className="circle-text n5">G#-</div>
        <div className="circle-text n6">Eb-</div>
        <div className="circle-text n7">Bb-</div>
        <div className="circle-text n8">F-</div>
        <div className="circle-text n9">C-</div>
        <div className="circle-text n10">G-</div>
        <div className="circle-text n11">D-</div>
        <div className="circle-text n12">A-</div>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/circle.png"}
        width={700}
        height={500}
        alt="minorscalec"
      />
    </div>
  );
}
