import type { FunctionComponent } from "react";
import { usePathsContext } from "../state/PathsContext";
import styles from "./GridItem.module.css";

interface IGridItemProps {
  displayDelay: number;
  posX: number;
  posY: number;
  value: number;
}

export const GridItem: FunctionComponent<IGridItemProps> = ({ displayDelay, posX, posY,  value }) => {
  const { setSelectedPoint } = usePathsContext();
  return (
    <button 
      className={styles.gridItem} 
      style={{ animationDelay: `${displayDelay}s` }}
      onClick={() => setSelectedPoint({ x: posX, y: posY })}
    >
      { value }
    </button>
  );
}
