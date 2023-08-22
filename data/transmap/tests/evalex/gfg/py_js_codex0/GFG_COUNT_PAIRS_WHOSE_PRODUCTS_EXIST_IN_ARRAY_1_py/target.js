function f_gold(arr, n) {
  var result = 0;
  var Hash = new Set();
  for (var i = 0; i < n; i++) Hash.add(arr[i]);
  for (var i = 0; i < n; i++) {
    for (var j = i + 1; j < n; j++) {
      var product = arr[i] * arr[j];
      if (Hash.has(product)) result += 1;
    }
  }
  return result;
}

