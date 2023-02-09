import type { FunctionComponent } from "react";
import styles from "./GridItem.module.css";

interface IGridItemProps {
  value: number;
}

export const GridItem: FunctionComponent<IGridItemProps> = ({ value }) => {
  return (
    <button className={styles.gridItem}>
      { value }
    </button>
  );
}
