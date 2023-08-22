function f_gold(arr, n) {
  let temp = Array(n).fill(0);
  let j = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= 0) {
      temp[j] = arr[i];
      j++;
    }
  }
  if (j == n || j == 0) return;
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      temp[j] = arr[i];
      j++;
    }
  }
  for (let k = 0; k < n; k++) arr[k] = temp[k];
}

