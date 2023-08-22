function f_gold(arr, n) {
  let mpis = Array(n).fill(0);
  for (let i = 0; i < n; i++) mpis[i] = arr[i];
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && mpis[i] < mpis[j] * arr[i]) mpis[i] = mpis[j] * arr[i];
    }
  }
  return Math.max(...mpis);
}

