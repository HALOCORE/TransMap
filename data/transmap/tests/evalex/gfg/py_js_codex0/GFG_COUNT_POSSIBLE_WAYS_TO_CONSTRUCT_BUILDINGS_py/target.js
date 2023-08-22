function f_gold(N) {
  if (N == 1) return 4;
  var countB = 1;
  var countS = 1;
  for (var i = 2; i < N + 1; i++) {
    var prev_countB = countB;
    var prev_countS = countS;
    countS = prev_countB + prev_countS;
    countB = prev_countS;
  }
  var result = countS + countB;
  return result * result;
}

