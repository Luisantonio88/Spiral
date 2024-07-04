import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0  p-2 pl-6 flex flex-row items-center">
      <button className="mr-4 p-1 rounded-md bg-white hover:bg-indigo-300 transition duration-500">
        <Image alt="menu" src="/menu.svg" width={30} height={30} />
      </button>
      <button className="text-2xl font-extrabold text-cyan-900 hover:text-cyan-600 transition duration-500 bg-white rounded p-2 pr-0">
        spiral
      </button>
      <button className="font-extralight text-2xl text-cyan-700 hover:text-cyan-600 tracking-wider hover:tracking-widest transition-all duration-1000 ease-out bg-white rounded p-2 pl-0">
        harmony
      </button>
      <button className="ml-auto mr-6 rounded-full bg-indigo-500 hover:bg-indigo-600 transition duration-500 ease-in-out text-white p-2 pl-3 pr-3 shadow-md">
        sh
      </button>
    </header>
  );
}
