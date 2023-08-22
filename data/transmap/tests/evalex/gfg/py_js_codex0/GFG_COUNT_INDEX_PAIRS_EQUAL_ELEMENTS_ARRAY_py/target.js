function f_gold(arr, n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] == arr[j]) ans += 1;
    }
  }
  return ans;
}

