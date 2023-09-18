function hexToRgb(str) {
  return str
    .slice(1)
    .match(/../g)
    .map((item) => parseInt(item, 16));
}

function rgbToHex(rgbArr) {
  const hex = rgbArr
    .map(item => `0${item.toString(16)}`.slice(-2))
    .join('')

  return `#${hex}`
}

// 变浅颜色值
function getLightColor(color, level) {
  let rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.round((255 - rgb[i]) * level + rgb[i])
  }
  return rgbToHex(rgb)
}

// 变深颜色值
function getDarkColor(color, level) {
  let rgb = hexToRgb(color)
  for (let i = 0; i < 3; i++) {
    rgb[i] = Math.floor(rgb[i] * (1 - level))
  }
  return rgbToHex(rgb)
}
