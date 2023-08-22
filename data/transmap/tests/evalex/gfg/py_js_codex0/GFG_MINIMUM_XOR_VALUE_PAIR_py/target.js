function f_gold(arr, n) {
  arr.sort();
  var min_xor = 999999;
  var val = 0;
  for (var i = 0; i < n - 1; i++) {
    for (var j = i + 1; j < n - 1; j++) {
      val = arr[i] ^ arr[j];
      min_xor = Math.min(min_xor, val);
    }
  }
  return min_xor;
}

