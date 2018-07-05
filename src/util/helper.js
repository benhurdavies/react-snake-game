export function coordinateForMove(x, y, direction) {
  switch (direction) {
    case 'left':
      return {
        x: x - 1,
        y,
      };

    case 'right':
      return {
        x: x + 1,
        y,
      };

    case 'up':
      return { x, y: y - 1 };

    case 'down':
      return { x, y: y + 1 };

    default:
      throw Error(`Not implemented direction : ${direction}`);
  }
}

export function getRandomPosition(width, height) {
  var x = random(1, width - 2);
  var y = random(1, height - 2);
  return { x, y };
}

function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export const TO_RADIANS = Math.PI / 180;

export const radianFromSide = {
  left: 180 * TO_RADIANS,
  right: 0 * TO_RADIANS,
  up: 270 * TO_RADIANS,
  down: 90 * TO_RADIANS,
};

export const radianFromCorner = {
  'left-down': 180 * TO_RADIANS,
  'up-right': 180 * TO_RADIANS,
  'right-up': 0 * TO_RADIANS,
  'down-left': 0 * TO_RADIANS,
  'right-down': 270 * TO_RADIANS,
  'up-left': 270 * TO_RADIANS,
  'down-right': 90 * TO_RADIANS,
  'left-up': 90 * TO_RADIANS,
};
