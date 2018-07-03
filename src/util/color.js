function getHexColor(colorStr) {
  var a = document.createElement('div');
  a.style.color = colorStr;
  var colors = window
    .getComputedStyle(document.body.appendChild(a))
    .color.match(/\d+/g)
    .map(function(a) {
      return parseInt(a, 10);
    });
  document.body.removeChild(a);
  return colors.length >= 3
    ? '#' +
        ((1 << 24) + (colors[0] << 16) + (colors[1] << 8) + colors[2])
          .toString(16)
          .substr(1)
    : false;
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join('0');
  return (zeros + str).slice(-len);
}

function invertColor(hex, bw) {
  if (hex.indexOf('#') === 0) {
    hex = hex.slice(1);
  }
  if (hex.length !== 6) {
    throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // http://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return '#' + padZero(r) + padZero(g) + padZero(b);
}

export function invertColorBlackWhite(color) {
  const hexColorCode = getHexColor(color);
  return invertColor(hexColorCode, true);
}
