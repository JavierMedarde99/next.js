// para que los log se ve en la consola de la pagina
"use client"
import { Description } from "./components/home/Description";
import {Hero} from "./components/home/Hero";
import {MainProducts} from "./components/home/MainProducts";
import styles from "./page.module.css";

export default function Home() {
  console.log("hola pagina de inicio")
  return (
    <main className={styles.main}>
      <Description/>
      <Hero />
      < MainProducts/>
    </main>
  );
}
