import { Container, ExternalLink } from "@/components/ui";
import { siteConfig } from "@/lib/constants";
import styles from "./Connect.module.css";

export function Connect() {
  return (
    <section className={styles.connect}>
      <Container>
        <h2 className={styles.sectionTitle}>Connect</h2>
        <div className={styles.content}>
          <p className={styles.text}>Find me elsewhere on the internet.</p>
          <nav className={styles.links} aria-label="Social links">
            <ExternalLink
              href={siteConfig.social.linkedin.url}
              variant="default"
              className={styles.socialLink}
            >
              {siteConfig.social.linkedin.label}
            </ExternalLink>
            <span className={styles.separator}>/</span>
            <ExternalLink
              href={siteConfig.social.github.url}
              variant="default"
              className={styles.socialLink}
            >
              {siteConfig.social.github.label}
            </ExternalLink>
          </nav>
        </div>
      </Container>
    </section>
  );
}
