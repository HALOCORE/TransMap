function f_gold(arr, n) {
  var sum = 0;
  arr.sort((a, b) => a-b);
  for (var i = 0; i < Math.floor(n / 2); i++) {
    sum -= (2 * arr[i]);
    sum += (2 * arr[n - i - 1]);
  }
  return sum;
}

