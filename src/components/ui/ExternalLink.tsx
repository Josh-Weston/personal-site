import styles from "./ExternalLink.module.css";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "subtle" | "accent" | "project";
  className?: string;
}

export function ExternalLink({
  href,
  children,
  variant = "default",
  className = "",
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.link} ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
