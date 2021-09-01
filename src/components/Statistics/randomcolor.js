function randomColor(min = 1, max = 230) {
  let r = (Math.floor(Math.random() * (max - min) + 1) + 10).toString();
  let g = (Math.floor(Math.random() * (max - min) + 1) + 10).toString();
  let b = (Math.floor(Math.random() * (max - min) + 1) + 10).toString();

  // let colorHex = `#${r}${g}${b}`;
  let color = `rgb(${r},${g},${b})`;

  return color;
}

export default randomColor;
