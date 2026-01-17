import { Hero, Projects, Connect, Footer } from "@/components/sections";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Projects />
      <Connect />
      <Footer />
    </main>
  );
}
