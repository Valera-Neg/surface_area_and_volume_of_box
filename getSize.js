function getSize(w, h, d) {
  let res = [];
  const totalSurfaceArea = 2*w*h + 2*w*d + 2*h*d;
  const volume = w*h*d;
  res.push(totalSurfaceArea)
  res.push(volume)
  return res;
}

console.log(getSize(4, 2, 6)) //> [88, 48]
console.log(getSize(10, 10, 10)) //> [600, 1000]
console.log(getSize(4, 2, 6)) //>[0], 88
console.log(getSize(4, 2, 6)) //>[0], 88