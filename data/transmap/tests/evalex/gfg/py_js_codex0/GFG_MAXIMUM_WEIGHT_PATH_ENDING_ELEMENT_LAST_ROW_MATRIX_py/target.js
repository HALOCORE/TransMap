
function f_gold(mat, N) {
  let dp = Array(N).fill(0).map(() => Array(N).fill(0));
  dp[0][0] = mat[0][0];
  for (let i = 1; i < N; i++) dp[i][0] = mat[i][0] + dp[i - 1][0];
  for (let i = 1; i < N; i++) {
    for (let j = 1; j < Math.min(i + 1, N); j++) dp[i][j] = mat[i][j] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
  }
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (result < dp[N - 1][i]) result = dp[N - 1][i];
  }
  return result;
}

