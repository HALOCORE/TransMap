const f_gold = (arr, n) => {
  arr.sort();
  let minXor = Number.MAX_VALUE;
  let val = 0;
  for (let i = 0; i < n - 1; i++) {
    val = arr[i] ^ arr[i + 1];
    minXor = Math.min(minXor, val);
  }
  return minXor;
};

