function f_gold(arr, n) {
  var result = 0;
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var product = arr[i] * arr[j];
      for (var k = 0; k < n; k++) {
        if (arr[k] == product) {
          result = result + 1;
          break;
        }
      }
    }
  }
  return result;
}

