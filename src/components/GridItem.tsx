import type { FunctionComponent } from "react";
import styles from "./GridItem.module.css";

interface IGridItemProps {
  value: number;
}

export const GridItem: FunctionComponent<IGridItemProps> = ({ value }) => {
  return (
    <div className={styles.gridItem}>
      { value }
    </div>
  );
}
