import Image from "next/image";

export type ButtonProps = {
  text: string;
  icon: string;
};

export default function ButtonMainIndigo({ text, icon }: ButtonProps) {
  return (
    <button
      className={`min-w-80 rounded-lg p-6 text-3xl bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-800 active:translate-y-2 transition duration-500 ease-in-out text-slate-50 m-3 shadow-md shadow-slate-400 hover:shadow-sm active:shadow-none flex flex-col items-center justify-center hover:translate-y-1`}
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
