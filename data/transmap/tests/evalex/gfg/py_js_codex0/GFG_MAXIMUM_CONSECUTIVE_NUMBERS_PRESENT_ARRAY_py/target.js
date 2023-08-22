function f_gold(arr, n) {
  let S = new Set();
  for (let i = 0; i < n; i++) S.add(arr[i]);
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (S.has(arr[i])) {
      let j = arr[i];
      while (S.has(j)) j += 1;
      ans = Math.max(ans, j - arr[i]);
    }
  }
  return ans;
}

