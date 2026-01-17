import { Container, ExternalLink } from "@/components/ui";
import { siteConfig } from "@/lib/constants";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.projects}>
      <Container>
        <div className={styles.projectList}>
          {siteConfig.projects.map((project) => (
            <article key={project.name} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <h3
                  className={styles.projectName}
                  style={{
                    lineHeight: `var(--line-height-${project.lineHeight})`,
                  }}
                >
                  <ExternalLink href={project.url} variant="project">
                    {project.name}
                  </ExternalLink>
                </h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
