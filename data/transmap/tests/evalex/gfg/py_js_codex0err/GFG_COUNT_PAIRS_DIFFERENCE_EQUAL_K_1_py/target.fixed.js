const f_gold = (arr, n, k) => {
  let count = 0;
  arr.sort((a, b) => a-b);
  let l = 0;
  let r = 0;
  while (r < n) {
    if (arr[r] - arr[l] == k) {
      count += 1;
      l += 1;
      r += 1;
    } else if (arr[r] - arr[l] > k) {
      l += 1;
    } else {
      r += 1;
    }
  }
  return count;
};

