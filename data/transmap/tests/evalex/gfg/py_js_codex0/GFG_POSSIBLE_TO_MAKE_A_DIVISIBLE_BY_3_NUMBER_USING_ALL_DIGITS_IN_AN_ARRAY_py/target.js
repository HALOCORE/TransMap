function f_gold(arr, n) {
  var remainder = 0;
  for (var i = 0; i < n; i++) remainder = (remainder + arr[i]) % 3;
  return remainder == 0;
}

