const f_gold = (arr, n) => {
  arr = arr.sort((a, b) => a-b);
  let diff = 10 ** 20;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i + 1] - arr[i] < diff) diff = arr[i + 1] - arr[i];
  }
  return diff;
};


