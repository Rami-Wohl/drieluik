export function Pageheader({ text }: { text: string }) {
  return (
    <h1 className="text-center font-sans text-3xl font-semibold tracking-[0.1rem] text-[#333333] text-opacity-90 sm:text-5xl">
      {text}
    </h1>
  );
}
