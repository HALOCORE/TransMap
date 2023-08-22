function f_gold(arr, n, k) {
  for (let i = k; i < n; i++) {
    let max_var = arr[k - 1];
    let pos = k - 1;
    for (let j = k - 2; j >= 0; j--) {
      if (arr[j] > max_var) {
        max_var = arr[j];
        pos = j;
      }
    }
    if (max_var > arr[i]) {
      let j = pos;
      while (j < k - 1) {
        arr[j] = arr[j + 1];
        j++;
      }
      arr[k - 1] = arr[i];
    }
  }
  for (let i = 0; i < k; i++) console.log(arr[i], end = " ");
}

