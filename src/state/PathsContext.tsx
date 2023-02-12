import { createContext, FunctionComponent, ReactNode, useContext, useEffect, useState } from "react";

type Movement = "down" | "left";

interface IPoint {
  x: number;
  y: number;
}

interface IPath {
  moves: {
    movement: Movement;
    destination: IPoint;
  }[]
}

interface IPathsContext {
  selectedPoint: IPoint | undefined;
  setSelectedPoint: (point: IPoint) => void;
  paths: IPath[];
}

const PathsContext = createContext<IPathsContext>({
  selectedPoint: undefined,
  setSelectedPoint: (_point: IPoint) => {},
  paths: [],
});

interface PathsProviderProps {
  children: ReactNode;
}

export const PathsProvider: FunctionComponent<PathsProviderProps> = ({ children }) => {
  const [selectedPoint, setSelectedPoint] = useState<IPoint | undefined>(undefined);
  const [paths, setPaths] = useState<IPath[]>([]);
  
  const getPathsToSelectedPoint = (): IPath[] => {
    return []; 
  };

  useEffect(() => {
    const traversedPaths = getPathsToSelectedPoint();
    setPaths(traversedPaths);
  }, [selectedPoint]);
  
  return (
    <PathsContext.Provider value={{
      selectedPoint, 
      setSelectedPoint,
      paths,
    }}>
      {children}
    </PathsContext.Provider>
  );
}

export const usePathsContext = (): IPathsContext => useContext(PathsContext);

