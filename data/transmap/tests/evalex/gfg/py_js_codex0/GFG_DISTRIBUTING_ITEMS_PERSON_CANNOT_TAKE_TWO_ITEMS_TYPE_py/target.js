function f_gold(arr, n, k) {
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == arr[i]) count += 1;
      if (count > 2 * k) return false;
    }
  }
  return true;
}

