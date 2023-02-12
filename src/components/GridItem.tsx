import { FunctionComponent, useMemo } from "react";
import classnames from "classnames";
import { usePathsContext } from "../state/PathsContext";
import styles from "./GridItem.module.css";

interface IGridItemProps {
  displayDelay: number;
  posX: number;
  posY: number;
  value: number;
}

export const GridItem: FunctionComponent<IGridItemProps> = ({ displayDelay, posX, posY,  value }) => {
  const { selectedPoint, setSelectedPoint } = usePathsContext();

  const isSelected = useMemo(() => 
    selectedPoint?.x === posX && selectedPoint?.y === posY
  ,[selectedPoint]);

  return (
    <button 
      className={classnames(styles.gridItem, isSelected ? styles.activeGridItem : undefined)} 
      style={{ animationDelay: `${displayDelay}s` }}
      onClick={() => setSelectedPoint({ x: posX, y: posY })}
    >
      { value }
    </button>
  );
}
