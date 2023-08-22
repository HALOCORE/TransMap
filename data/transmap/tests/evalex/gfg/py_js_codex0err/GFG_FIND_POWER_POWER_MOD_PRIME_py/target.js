function f_gold(A, B, C, M) {
  var res = Math.pow(B, C) % (M - 1);
  var ans = Math.pow(A, res) % M;
  return ans;
}

