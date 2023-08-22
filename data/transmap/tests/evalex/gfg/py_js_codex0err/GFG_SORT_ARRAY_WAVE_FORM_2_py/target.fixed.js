function f_gold(arr, n) {
  arr.sort((a, b) => a-b);
  for (let i = 0; i < n - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}

