import type { FunctionComponent } from "react";
import styles from "./GridItem.module.css";

interface IGridItemProps {
  value: number;
  displayDelay: number;
}

export const GridItem: FunctionComponent<IGridItemProps> = ({ value, displayDelay }) => {
  return (
    <button className={styles.gridItem} style={{ animationDelay: `${displayDelay}s` }}>
      { value }
    </button>
  );
}
