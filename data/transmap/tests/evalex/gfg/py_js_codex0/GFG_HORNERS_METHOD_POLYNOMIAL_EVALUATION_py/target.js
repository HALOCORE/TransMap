function f_gold(poly, n, x) {
  let result = poly[0];
  for (let i = 1; i < n; i++) result = result * x + poly[i];
  return result;
}

