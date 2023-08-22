function f_gold(arr, n) {
  let isSorted = 0;
  while (isSorted == 0) {
    isSorted = 1;
    let temp = 0;
    for (let i = 1; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = 0;
      }
    }
    for (let i = 0; i < n - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = 0;
      }
    }
  }
  return;
}

