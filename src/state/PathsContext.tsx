import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

interface IPoint {
  x: number;
  y: number;
}

interface IPointsContext {
  grid: Array<Array<number>>;
  setGrid: (newGrid: Array<Array<number>>) => void;
  selectedPoint: IPoint | undefined;
  setSelectedPoint: (point: IPoint) => void;
  paths: Array<Array<IPoint>>;
}

const PathsContext = createContext<IPointsContext>({
  grid: [],
  setGrid: (_grid: Array<Array<number>>) => {},
  selectedPoint: undefined,
  setSelectedPoint: (_point: IPoint) => {},
  paths: [],
});

interface PathsProviderProps {
  children: ReactNode;
}

export const PathsProvider: FunctionComponent<PathsProviderProps> = ({ children }) => {
  const [grid, setGrid] = useState<Array<Array<number>>>([]);
  const [selectedPoint, setSelectedPoint] = useState<IPoint | undefined>(undefined);
  const [paths, setPaths] = useState<Array<Array<IPoint>>>([]);
 
  const getPathsToSelectedPoint = (startPoint: IPoint, prevPoints: IPoint[]): Array<Array<IPoint>> => {
    const nodes: Array<Array<IPoint>> = [];
    if (!selectedPoint) return [];
    if (grid[startPoint.y + 1]?.[startPoint.x] != null && (startPoint.y + 1 <= selectedPoint.y)) {
      const nextPoint: IPoint = { x: startPoint.x, y: startPoint.y + 1 };
      const newPath: IPoint[] = [...prevPoints, nextPoint];
      const paths = getPathsToSelectedPoint(nextPoint, newPath);
      nodes.push(paths[0]);
    }
    if (grid[startPoint.y]?.[startPoint.x + 1] != null && (startPoint.x + 1 <= selectedPoint.x)) {
      const nextPoint: IPoint = { x: startPoint.x + 1, y: startPoint.y };
      const newPath: IPoint[] = [...prevPoints, nextPoint];
      const paths = getPathsToSelectedPoint(nextPoint, newPath);
      nodes.push(paths[0]);
    }
    nodes.push(prevPoints);
    return nodes;
  };

  useEffect((): void => {
    if (!grid.length) return;
    const traversedPaths = getPathsToSelectedPoint({ x: 0, y: 0 }, []);
    console.log(traversedPaths);
    setPaths(traversedPaths);
  }, [selectedPoint]);
  
  return (
    <PathsContext.Provider value={{
      grid,
      setGrid,
      selectedPoint, 
      setSelectedPoint,
      paths,
    }}>
      {children}
    </PathsContext.Provider>
  );
}

export const usePathsContext = (): IPointsContext => useContext(PathsContext);

