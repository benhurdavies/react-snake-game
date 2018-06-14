export function paintOnBoard(board, changes) {
  const newFrameBoard = [...board.map(row => [...row])];
  changes.forEach(change => {
    newFrameBoard[change.y][change.x] = change;
  });
  return newFrameBoard;
}
