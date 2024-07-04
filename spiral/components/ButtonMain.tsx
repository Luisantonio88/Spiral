import Image from "next/image";

export type ButtonProps = {
  text: string;
  icon: string;
};

export default function ButtonMain({ text, icon }: ButtonProps) {
  return (
    <button
      className={`min-w-80 rounded-lg p-6 text-3xl bg-cyan-400 hover:bg-cyan-500 active:bg-slate-300 transition duration-500 ease-in-out text-white m-3 shadow-md hover:shadow-xl shadow-indigo-200 flex flex-col items-center justify-center hover:scale-105`}
    >
      {text}

      <Image
        alt={text.toLowerCase()}
        src={`/${icon}`}
        width={80}
        height={80}
        className="mt-5"
      />
    </button>
  );
}
