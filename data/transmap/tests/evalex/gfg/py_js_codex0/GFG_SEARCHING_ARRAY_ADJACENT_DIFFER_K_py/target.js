function f_gold(arr, n, x, k) {
  let i = 0;
  while (i < n) {
    if (arr[i] == x) return i;
    i = i + Math.max(1, Math.floor(Math.abs(arr[i] - x) / k));
  }
  console.log("number is not present!");
  return -1;
}

