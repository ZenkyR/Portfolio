import Canvas from "@/components/fond";
import { NavBar } from "@/components/navBar";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <NavBar className="fixed" />
      <h1 className="text-9xl font-bold absolute">Hello World !</h1>
      <Canvas className="w-full" />
    </div>
  );
}
