function f_gold(A, B, m, n) {
  A.sort();
  B.sort();
  var a = 0;
  var b = 0;
  var result = Number.MAX_VALUE;
  while (a < m && b < n) {
    if (Math.abs(A[a] - B[b]) < result) result = Math.abs(A[a] - B[b]);
    if (A[a] < B[b]) a++;
    else b++;
  }
  return result;
}

