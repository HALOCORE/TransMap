function f_gold(n) {
  var N = 10;
  var count = 1;
  for (var i = 1; i <= n; i++) {
    count = parseInt(count * (N + i - 1));
    count = parseInt(count / i);
  }
  return count;
}

