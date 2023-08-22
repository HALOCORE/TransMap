function f_gold(arr, n) {
  var result = - 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++) {
      for (var k = j + 1; k < n; k++) {
        if (arr[j] * arr[k] == arr[i]) result = Math.max(result, arr[i]);
      }
    }
  }
  return result;
}

