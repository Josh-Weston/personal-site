import styles from "./Divider.module.css";

interface DividerProps {
  variant?: "default" | "gradient" | "subtle";
  spacing?: "sm" | "md" | "lg" | "xl";
}

export function Divider({ variant = "default", spacing = "lg" }: DividerProps) {
  return (
    <div
      className={`${styles.divider} ${styles[variant]} ${styles[`spacing-${spacing}`]}`}
    />
  );
}
