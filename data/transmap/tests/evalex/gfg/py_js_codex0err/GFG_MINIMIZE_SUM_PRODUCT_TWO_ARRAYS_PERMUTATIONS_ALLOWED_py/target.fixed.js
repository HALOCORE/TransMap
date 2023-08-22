function f_gold(A, B, n) {
  [...A];
  [...B];
  let result = 0;
  for (let i = 0; i < n; i++) result += (A[i] * B[n - i - 1]);
  return result;
}

