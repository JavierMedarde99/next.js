// para que los log se ve en la consola de la pagina
"use client"
import { Description } from "./components/home/Description";
import {Hero} from "./components/home/Hero";
import {MainProducts} from "./components/home/MainProducts";

export default function Home() {
  console.log("hola pagina de inicio")
  return (
    <main>
      <Description/>
      <Hero />
      < MainProducts/>
    </main>
  );
}
