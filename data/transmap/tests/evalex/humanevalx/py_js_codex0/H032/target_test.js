//TESTED_PROGRAM
const getRandomIntInclusive = (min = 0, max = 9) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

for (let i = 0; i < 100; i++) {
  let ncoeff = 2 * getRandomIntInclusive(1, 4);
  let coeffs = [];
  for (let j = 0; j < ncoeff; j++) {
    let coeff = getRandomIntInclusive(-10, 10);
    if (coeff === 0)
      coeff = 1;
    coeffs.push(coeff);
  }
  let solution = find_zero(coeffs);
  if(Math.abs(poly(coeffs, solution)) >= 1e-4)
    throw Error("MyLogError MISMATCH");
}