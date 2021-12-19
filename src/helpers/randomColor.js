export default function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = 100 + Math.floor(Math.random() * 256);
  let b = 50 + Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
