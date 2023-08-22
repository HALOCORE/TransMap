function f_gold(f, d, s) {
  let mem = [[0], [0]];
  for (let i = 0; i <= d; i++) {
    for (let j = 0; j <= s; j++) {
      if (i == 0 && j == 0) {
        mem[i][j] = 1;
      } else {
        mem[i][j] = mem[i][j - 1] + mem[i - 1][j - 1];
        if (j - f - 1 >= 0) {
          mem[i][j] -= mem[i - 1][j - f - 1];
        }
      }
    }
  }
  return mem[d][s];
}

