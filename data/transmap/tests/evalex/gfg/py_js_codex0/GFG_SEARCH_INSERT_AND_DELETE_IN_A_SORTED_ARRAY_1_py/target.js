function f_gold(arr, n, key, capacity) {
  if(n >= capacity) return n;
  var i = n - 1;
  while (i >= 0 && arr[i] > key) {
    arr[i + 1] = arr[i];
    i -= 1;
  }
  arr[i + 1] = key;
  return(n + 1);
}

