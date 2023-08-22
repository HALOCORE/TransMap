const f_gold = (arr, n) => {
  let diff = 10 ** 20;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (Math.abs(arr[i] - arr[j]) < diff) diff = Math.abs(arr[i] - arr[j]);
    }
  }
  return diff;
};

