function f_gold(n) {
  let nthElement = 19 + (n - 1) * 9;
  let outliersCount = Math.floor(Math.log10(nthElement)) - 1;
  nthElement += 9 * outliersCount;
  return nthElement;
}

