import { Container } from "@/components/ui";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p className={styles.copyright}>© {currentYear} Josh Weston</p>
        </div>
      </Container>
    </footer>
  );
}
