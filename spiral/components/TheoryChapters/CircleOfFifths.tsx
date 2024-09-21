import React from "react";

export default function CircleOfFifths() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Circle of Fifths</h1>
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
        <div className="circle-text n1">G</div>
        <div className="circle-text n2">D</div>
        <div className="circle-text n3">A</div>
        <div className="circle-text n4">E</div>
        <div className="circle-text n5">B</div>
        <div className="circle-text n6">Gb</div>
        <div className="circle-text n7">Db</div>
        <div className="circle-text n8">Ab</div>
        <div className="circle-text n9">Eb</div>
        <div className="circle-text n10">Bb</div>
        <div className="circle-text n11">F</div>
        <div className="circle-text n12">C</div>
      </div>
    </div>
  );
}
