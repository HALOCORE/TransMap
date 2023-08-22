function f_gold(mat, N) {
  let max_xor = 0;
  for (let i = 0; i < N; i++) {
    let r_xor = 0;
    let c_xor = 0;
    for (let j = 0; j < N; j++) {
      r_xor = r_xor ^ mat[i][j];
      c_xor = c_xor ^ mat[j][i];
    }
    if (max_xor < Math.max(r_xor, c_xor)) max_xor = Math.max(r_xor, c_xor);
  }
  return max_xor;
}


