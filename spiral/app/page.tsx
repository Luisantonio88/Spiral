import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="fixed left-0 right-0 top-0 bg-white p-4 pl-6 tracking-widest  border-cyan-500 flex items-center">
        <button className="mr-6">
          <Image alt="menu" src="/menu.svg" width={30} height={30} />
        </button>
        <button className="font-light text-2xl text-cyan-800 hover:text-cyan-600">
          Spiral Harmony
        </button>
      </div>
      <div className="mt-20 flex justify-center">
        <button className="min-w-96 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-white active:text-cyan-600 transition duration-500 ease-in-out text-white  inline-block m-5 shadow-xl">
          Play
        </button>
        <button className="min-w-96 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-white active:text-cyan-600 transition duration-500 ease-in-out text-white  inline-block m-5 shadow-xl">
          Practice
        </button>
        <button className="min-w-96 rounded-lg p-6 text-2xl bg-cyan-500 hover:bg-cyan-600 active:bg-white active:text-cyan-600 transition duration-500 ease-in-out text-white inline-block m-5 shadow-lg">
          Learn
        </button>
      </div>
    </main>
  );
}
