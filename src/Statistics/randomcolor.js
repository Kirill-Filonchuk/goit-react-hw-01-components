function randomColor(min = 1, max = 230) {
  let r = (Math.floor(Math.random() * (max - min) + 1) + min).toString(16);
  let g = (Math.floor(Math.random() * (max - min) + 1) + min).toString(16);
  let b = (Math.floor(Math.random() * (max - min) + 1) + min).toString(16);

  let color = '#' + r + g + b;
  return color;
}

export default randomColor;
