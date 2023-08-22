function f_gold(A, N, M) {
  var ans = 0;
  var h = Array(M).fill(0);
  for (var i = 0; i < N; i++) {
    A[i] = (A[i] % M + M) % M;
    h[A[i]] = h[A[i]] + 1;
  }
  for (var i = 0; i < M; i++) {
    for (var j = i; j < M; j++) {
      var rem = (M - (i + j) % M) % M;
      if (rem < j) continue;
      if (i == j && rem == j) ans = ans + h[i] * (h[i] - 1) * (h[i] - 2) / 6;
      else if (i == j) ans = ans + (h[i] * (h[i] - 1) * h[rem] / 2);
      else if (i == rem) ans = ans + h[i] * (h[i] - 1) * h[j] / 2;
      else if (rem == j) ans = ans + h[j] * (h[j] - 1) * h[i] / 2;
      else ans = ans + h[i] * h[j] * h[rem];
    }
    return ans;
  }
}

