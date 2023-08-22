function f_gold(arr, n, x) {
  var i = 0;
  while(i <= n - 1) {
    if(arr[i] == x) return i;
    i += Math.abs(arr[i] - x);
  }
  return - 1;
}

