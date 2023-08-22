const f_gold = (arr, n) => {
  if (n < 3) return -1;
  let max_product = -(Number.MAX_SAFE_INTEGER - 1);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++)
        max_product = Math.max(max_product, arr[i] * arr[j] * arr[k]);
    }
  }
  return max_product;
};

