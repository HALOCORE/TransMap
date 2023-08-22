function f_gold(arr, n) {
  var neg = 0;
  var pos = 0;
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += arr[i];
    if (arr[i] < 0) neg += 1;
    else pos += 1;
  }
  return sum / Math.abs(neg - pos);
}

