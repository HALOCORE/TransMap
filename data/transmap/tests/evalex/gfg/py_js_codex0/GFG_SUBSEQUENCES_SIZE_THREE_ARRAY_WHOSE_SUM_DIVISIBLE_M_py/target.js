function f_gold(A, N, M) {
  let sum = 0;
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        sum = A[i] + A[j] + A[k];
        if (sum % M == 0) ans = ans + 1;
      }
    }
  }
  return ans;
}

