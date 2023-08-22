function f_gold(arr, n, k) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] - arr[j] == k || arr[j] - arr[i] == k) count++;
    }
  }
  return count;
}

