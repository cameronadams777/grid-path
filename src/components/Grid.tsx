import { FunctionComponent, useEffect, useMemo } from "react";
import { GridItem } from "./GridItem";
import { createGridWithPaths } from "../helpers";
import styles from "./Grid.module.css";
import { usePathsContext } from "../state/PathsContext";

interface IGridProps {
  width: number;
  height: number;
}

export const Grid: FunctionComponent<IGridProps> = ({ width, height }) => { 
  const { grid, setGrid } = usePathsContext();

  const gridElements = useMemo(() => grid.map((_item, indexHeight) => grid[indexHeight]
    .map((_item, indexWidth) => (
          <GridItem
            posX={indexWidth}
            posY={indexHeight}
            value={grid[indexHeight][indexWidth]} 
            displayDelay={((indexHeight * grid[indexHeight].length) + indexWidth) * 0.25}
            key={`${indexHeight}_${indexWidth}`}
          />
        )
      )
    ), [grid]);

  const columns = useMemo(() => {
    if(!width) return "auto";
    return new Array(width).fill("auto").join(" ")
  }, [width]);

  useEffect(() => {
    if(!width || !height) return;
    setGrid(createGridWithPaths(width, height));
  }, [width, height]);

  return (
    <div className={styles.grid} style={{ gridTemplateColumns: columns }}>
      {gridElements}
    </div>
  );
}
