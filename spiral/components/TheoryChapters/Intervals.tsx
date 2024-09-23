import Image from "next/image";
import React from "react";

export default function Intervals() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <h1>Intervals</h1>
      <h2>Ascending</h2>
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>unison</p>
        <p>minor 2nd</p>
        <p>major 2nd</p>
        <p>minor 3rd</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals1.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>major 3rd</p>
        <p>perfect 4th</p>
        <p>augmented 4th</p>
        <p>diminished 5th</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals2.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>perfect 5th</p>
        <p>minor 6th</p>
        <p>major 6th</p>
        <p>minor 7th</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals3.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-md ml-8">
        <p>major 7th</p>
        <p>octave</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals4.png"}
        width={360}
        height={500}
        alt="intervals"
      />
      <h2>Descending</h2>
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>unison</p>
        <p>minor 2nd</p>
        <p>major 2nd</p>
        <p>minor 3rd</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals5.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>major 3rd</p>
        <p>perfect 4th</p>
        <p>augmented 4th</p>
        <p>diminished 5th</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals6.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>perfect 5th</p>
        <p>minor 6th</p>
        <p>major 6th</p>
        <p>minor 7th</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals7.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-md ml-8">
        <p>major 7th</p>
        <p>octave</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals8.png"}
        width={360}
        height={500}
        alt="intervals"
      />
      <h2>Interval Inversions</h2>
      <table className="shadow shadow-cyan-500 rounded-xl w-96 mb-8 bg-slate-50 hover:bg-cyan-50 hover:scale-105 transition duration-500 cursor-default">
        <tr>
          <th className="p-4">Interval</th>
          <th></th>
          <th className="p-4">Inversion</th>
          <th></th>
        </tr>
        <tr>
          <td>Unison</td>
          <td>U</td>
          <td>Octave</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Minor second</td>
          <td>b2</td>
          <td>Major seventh</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Major second</td>
          <td>2</td>
          <td>Minor seventh</td>
          <td>b7</td>
        </tr>
        <tr>
          <td>Minor third</td>
          <td>b3</td>
          <td>Major sixth</td>
          <td>6</td>
        </tr>
        <tr>
          <td>Major third</td>
          <td>3</td>
          <td>Minor sixth</td>
          <td>b6</td>
        </tr>
        <tr>
          <td>Perfect fourth</td>
          <td>4</td>
          <td>Perfect fifth</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Augmented fourth</td>
          <td>#4</td>
          <td>Diminished fifth</td>
          <td>b5</td>
        </tr>
        <tr>
          <td>Perfect fifth</td>
          <td>5</td>
          <td>Perfect fourth</td>
          <td>4</td>
        </tr>
        <tr>
          <td>Minor sixth</td>
          <td>b6</td>
          <td>Major third</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Major sixth</td>
          <td>6</td>
          <td>Minor third</td>
          <td>b3</td>
        </tr>
        <tr>
          <td>Minor seventh</td>
          <td>b7</td>
          <td>Major second</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Major seventh</td>
          <td>7</td>
          <td>Minor second</td>
          <td>b2</td>
        </tr>
        <tr>
          <td>Octave</td>
          <td>8</td>
          <td>Unison</td>
          <td>U</td>
        </tr>
      </table>
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Unison - Octave</p>
        <p>Minor second - Major seventh</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals9.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Major second - Minor seventh</p>
        <p>Minor third - Major sixth</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals10.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Major third - Minor sixth</p>
        <p>Perfect fourth - Perfect fifth</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals11.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Augmented fourth - Diminished fifth</p>
        <p>Diminished fifth - Augmented fourth</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals12.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Perfect fifth - Perfect fourth</p>
        <p>Minor sixth - Major third</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals13.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Major sixth - Minor third</p>
        <p>Minor seventh - Major second</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals14.png"}
        width={700}
        height={500}
        alt="intervals"
      />
      <div className="flex flex-row justify-evenly w-full max-w-3xl ml-8">
        <p>Major seventh - Minor second</p>
        <p className="mr-8">Octave - Unison</p>
      </div>
      <Image
        className="theory-image"
        src={"/Theory/intervals15.png"}
        width={700}
        height={500}
        alt="intervals"
      />
    </div>
  );
}
