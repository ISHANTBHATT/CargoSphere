import Image from "next/image";
import Homepage from "./components/Homepage";

export default function Home() {
  return (
    <div className=" min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-primary">
      <Homepage />
    </div>
  );
}
