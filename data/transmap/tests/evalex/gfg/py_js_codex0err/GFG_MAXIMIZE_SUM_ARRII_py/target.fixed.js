function f_gold(arr, n) {
  arr.sort((a, b) => a-b);
  var sum = 0;
  for (var i = 0; i < n; i++) sum += arr[i] * i;
  return sum;
}

