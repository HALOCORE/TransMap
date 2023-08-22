function f_gold(arr, n) {
  var i = - 1;
  for (var j = 0; j < n; j++) {
    if (arr[j] < 0) {
      i += 1;
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  var pos = i + 1;
  var neg = 0;
  while (pos < n && neg < pos && arr[neg] < 0) {
    var temp = arr[neg];
    arr[neg] = arr[pos];
    arr[pos] = temp;
    pos += 1;
    neg += 2;
  }
}

