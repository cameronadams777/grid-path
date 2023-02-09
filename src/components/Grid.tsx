import { FunctionComponent, useMemo } from "react";
import { GridItem } from "./GridItem";
import { createGridWithPaths } from "../helpers";
import styles from "./Grid.module.css";

interface IGridProps {
  width: number;
  height: number;
}

export const Grid: FunctionComponent<IGridProps> = ({ width, height }) => { 
  const gridElements = useMemo(() => {
    if(!width || !height) return [];
    const grid = createGridWithPaths(width, height);
    const items = grid.map((_item, indexHeight) => {
      return grid[indexHeight].map((_item, indexWidth) => {
        return (
          <GridItem 
            value={grid[indexHeight][indexWidth]} 
            displayDelay={((indexHeight * grid[indexHeight].length) + indexWidth) * 0.25}
            key={`${indexHeight}_${indexWidth}`}
          />
        );
      });
    });
    return items;
  }, [width, height]);

  const columns = useMemo(() => {
    if(!width) return "auto";
    return new Array(width).fill("auto").join(" ")
  }, [width]);
  
  return (
    <div className={styles.grid} style={{ gridTemplateColumns: columns }}>
      {gridElements}
    </div>
  );
}
