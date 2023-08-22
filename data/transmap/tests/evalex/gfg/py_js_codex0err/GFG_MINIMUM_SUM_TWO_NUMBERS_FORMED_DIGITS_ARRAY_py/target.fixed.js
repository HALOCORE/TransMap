function f_gold(arr, n) {
  arr.sort((a, b) => a-b);
  var a = 0;
  var b = 0;
  for (var i = 0; i < n; i++) {
    if (i % 2 != 0) a = a * 10 + arr[i];
    else b = b * 10 + arr[i];
  }
  return a + b;
}

