import { describe, expect, it } from "vitest";
import { createGridWithPaths } from "../../helpers";

describe("Helpers", () => {
  describe("createGridWithPaths", () => {
    it("should return the correct grid values given a width of 3 and a height of 3", () => {
      expect(createGridWithPaths(3, 3)).toEqual([
        [1, 1, 1],
        [1, 2, 3],
        [1, 3, 6]
      ]);
    });

    it("should return the correct grid values given a width of 4 and a height of 4", () => {
      expect(createGridWithPaths(4, 4)).toEqual([
        [1, 1,  1,  1],
        [1, 2,  3,  4],
        [1, 3,  6, 10],
        [1, 4, 10, 20]
      ]);    
    });

    it("should return the correct grid values given a width of 2 and a height of 4", () => {
      expect(createGridWithPaths(2, 4)).toEqual([
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
      ]);    
    });

    it("should return the correct grid values given a width of 4 and a height of 2", () => {
      expect(createGridWithPaths(4, 2)).toEqual([
        [1, 1, 1, 1],
        [1, 2, 3, 4],
      ]);    
    });
  });
});
