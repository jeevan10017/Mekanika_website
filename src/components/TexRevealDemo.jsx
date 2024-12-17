import {TextRevealByWord} from "./magicui/TextReveal.tsx";

export function TextRevealDemo() {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center rounded-lg  bg-white dark:bg-black ">
      <TextRevealByWord text="Magic UI will change the way you design. " />
    </div>
  );
}
