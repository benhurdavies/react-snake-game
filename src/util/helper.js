export function coordinateForMove(x, y, direction) {
  switch (direction) {
    case 'left':
      return {
        x: x - 1,
        y
      };
    case 'right':
      return {
        x: x + 1,
        y
      };
    case 'up':
      return { x, y: y - 1 };
    case 'down':
      return { x, y: y + 1 };
  }
}
