function f_gold(arr, n, x) {
  var i = 0;
  while (i < n) {
    if (arr[i] == x) return i;
    i = i + Math.abs(arr[i] - x);
  }
  console.log("number is not present!");
  return -1;
}

