function f_gold(A, B, n) {
  A.sort();
  B.sort();
  let result = 0;
  for (let i = 0; i < n; i++) result += (A[i] * B[n - i - 1]);
  return result;
}

