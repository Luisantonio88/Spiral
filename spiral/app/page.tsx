import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 right-0 top-0 bg-white p-2 pl-6   border-cyan-500 flex items-center">
        <button className="mr-4">
          <Image alt="menu" src="/menu.svg" width={30} height={30} />
        </button>
        <button className=" text-2xl font-extrabold text-cyan-900 hover:text-cyan-600 transition duration-500">
          spiral
        </button>
        <button className="font-extralight text-2xl text-cyan-700 hover:text-cyan-600 tracking-wider hover:tracking-widest transition-all duration-1000 ease-out">
          harmony
        </button>
        <button className="ml-auto mr-6 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-500 ease-in-out text-white p-2 pl-3 pr-3 shadow-md">
          LA
        </button>
      </div>
      <div className="mt-12 flex flex-wrap p-6">
        <button className="min-w-80 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-slate-300  transition duration-1000 ease-in-out text-white m-3 shadow-xl flex flex-col items-center justify-center  hover:scale-105">
          Play
          <Image
            alt="play"
            src="/play.svg"
            width={80}
            height={80}
            className="mt-5"
          />
        </button>
        <button className="min-w-80 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-slate-300  transition duration-1000 ease-in-out text-white m-3 shadow-xl flex flex-col items-center justify-center hover:scale-105">
          Practice
          <Image
            alt="guitar"
            src="/guitar.svg"
            width={80}
            height={80}
            className="mt-5"
          />
        </button>
        <button className="min-w-80 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-slate-300  transition duration-1000 ease-in-out text-white m-3 shadow-xl flex flex-col items-center justify-center hover:scale-105">
          Learn
          <Image
            alt="piano"
            src="/piano.svg"
            width={80}
            height={80}
            className="mt-5"
          />
        </button>
        <button className="min-w-80 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-slate-300  transition duration-1000 ease-in-out text-white m-3 shadow-xl flex flex-col items-center justify-center hover:scale-105">
          yeah
        </button>
        <button className="min-w-80 rounded-lg p-6 text-2xl bg-indigo-500 hover:bg-indigo-600 active:bg-slate-300 transition duration-1000 ease-in-out text-white m-3 shadow-xl flex flex-col items-center justify-center hover:scale-105">
          yeah
        </button>
      </div>
    </main>
  );
}
