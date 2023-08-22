function f_gold(arr, n, k) {
  for (let i = 0; i < n - 1; i++) {
    let pos = i;
    for (let j = i + 1; j < n; j++) {
      if (j - i > k) break;
      if (arr[j] < arr[pos]) pos = j;
    }
    for (let j = pos; j > i; j--) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
    }
    k -= pos - i;
  }
}

