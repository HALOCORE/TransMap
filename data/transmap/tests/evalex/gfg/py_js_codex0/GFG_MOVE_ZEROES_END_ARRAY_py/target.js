function f_gold(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] != 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < n) {
    arr[count] = 0;
    count++;
  }
}

