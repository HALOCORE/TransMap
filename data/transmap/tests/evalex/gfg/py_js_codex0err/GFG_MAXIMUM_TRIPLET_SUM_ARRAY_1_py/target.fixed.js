function f_gold(arr, n) {
  arr.sort((a, b) => a-b);
  return(arr[n - 1] + arr[n - 2] + arr[n - 3]);
}

