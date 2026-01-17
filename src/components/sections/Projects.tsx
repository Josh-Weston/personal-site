import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/constants";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.projects}>
      <Container>
        <div className={styles.projectList}>
          {siteConfig.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
            >
              <article className={styles.projectContent}>
                <h3
                  className={styles.projectName}
                  style={{
                    lineHeight: `var(--line-height-${project.lineHeight})`,
                  }}
                >
                  <span
                    className={styles.projectNameText}
                    style={
                      {
                        "--underline-offset": project.underlineOffset || "-6px",
                      } as React.CSSProperties
                    }
                  >
                    {project.name}
                  </span>
                </h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </article>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
