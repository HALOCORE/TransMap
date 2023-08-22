function f_gold(A) {
  var n = 2 * A;
  var dpArray = new Array(n + 1);
  dpArray[0] = 1;
  dpArray[2] = 1;
  for (var i = 4; i <= n; i += 2) {
    for (var j = 0; j <= i - 2; j += 2) dpArray[i] += dpArray[j] * dpArray[i - 2 - j];
  }
  return parseInt(dpArray[n]);
}

