function f_gold(arr, n) {
  for (let i = 0; i < n; i++) {
    let j = 0;
    while (j < n) {
      if (i != j && arr[i] == arr[j]) break;
      j++;
    }
    if (j == n) return arr[i];
  }
  return -1;
}

