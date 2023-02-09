/**
  * Given a width and height value, generate a grid where each cell,
  * contains the number of paths that can be taken to reach that cell
  * if only left and down movements are allowed.
  */
export const createGridWithPaths = (width: number, height: number): Array<Array<number>> => {
  let grid = [...new Array(height)].map(() => [...new Array(width)]);
  grid.forEach((_item, indexHeight) => {
    return grid[indexHeight].forEach((_item, indexWidth) => {
      if(indexWidth - 1 < 0 || indexHeight - 1 < 0) grid[indexHeight][indexWidth] = 1;
      else grid[indexHeight][indexWidth] = grid[indexHeight - 1][indexWidth] + grid[indexHeight][indexWidth - 1];
    });
  });
  return grid;
}
