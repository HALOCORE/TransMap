function f_gold(arr, n, m) {
  var max = 0;
  var min = 0;
  arr.sort((a, b) => a-b);
  var j = n - 1;
  for (var i = 0; i < m; i++) {
    min += arr[i];
    max += arr[(j+arr.length)%arr.length];
    j = j - 1;
  }
  return (max - min);
}

