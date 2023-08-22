function f_gold(arr, n, m) {
  var max = 0;
  var min = 0;
  arr.sort();
  var j = n - 1;
  for (var i = 0; i < m; i++) {
    min += arr[i];
    max += arr[j];
    j = j - 1;
  }
  return (max - min);
}

