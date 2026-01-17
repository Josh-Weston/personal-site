import { Container } from "@/components/ui";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <p className={styles.greeting}>👋 Hey, I&apos;m</p>
          <h1 className={styles.name}>
            <span className={styles.gradientText}>Josh</span>
          </h1>
          <div className={styles.tagline}>
            <p className={styles.taglineText}>
              I live in Halifax, Canada 🍁 and I like to{" "}
              <span className={styles.highlight}>build</span> things with code
              and AI.
            </p>
          </div>
        </div>
        <div className={styles.transitionText}>
          <span className={styles.arrow}>↓</span>
          <span className={styles.label}>
            Here's what I'm currently building
          </span>
        </div>
      </Container>
    </section>
  );
}
