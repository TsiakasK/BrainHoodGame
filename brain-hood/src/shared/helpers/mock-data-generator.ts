export const generateMockData = (index: number): any => {
  const rand = Number(Math.random() * 100).toFixed();
  return {
    "id": index,
    "round": index,
    "tspots": [rand, 4, rand, 5, 4, 5, rand, 4, 5, 4, rand, 5, 4, rand, 4, 5, rand, 4, rand, 0],
    "ttypes": [2, 4, 1, 4, 2, 4, 2, rand, 1, 2, 2, rand, rand, 1, 2, rand, 2, 4, 1, 2],
    "tcolors": [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1],
    "shoot": [0, 1, 1, 1, rand, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    "move": [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    "tselection": [1, 0, 0, 0, 1, rand], "OLM": ["t", "t1", "t2", "trand", "t4"],
    "scores": ["s1", "s2", "s3", "s4", "game", "points"]
  }
}