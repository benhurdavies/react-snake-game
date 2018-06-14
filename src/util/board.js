export function getBoard(screenWidth, screenHeight, tileSize) {
  const rows = Math.floor(screenWidth / tileSize);
  const columns = Math.floor(screenHeight / tileSize);

  const board = Array(columns - 1)
    .fill(0)
    .map((_, colIndex) => {
      return Array(rows - 1)
        .fill(0)
        .map((_, rowIndex) => {
          return defaultTile(rowIndex, colIndex);
        });
    });

  return board;
}

export function defaultTile(x, y) {
  return {
    id: `${x}|${y}`,
    aboveIt: null,
    x,
    y
  };
}
