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

export function getRandomPosition(width,height) {
  var x = random(1, width - 2);
  var y = random(1, height - 2);
  return {x, y};
}

function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}
