function f_gold(arr, n) {
  var ans = -2147483648;
  for (var i = 0; i < n; i++) {
    var curr_xor = 0;
    for (var j = i; j < n; j++) {
      curr_xor = curr_xor ^ arr[j];
      ans = Math.max(ans, curr_xor);
    }
  }
  return ans;
}

