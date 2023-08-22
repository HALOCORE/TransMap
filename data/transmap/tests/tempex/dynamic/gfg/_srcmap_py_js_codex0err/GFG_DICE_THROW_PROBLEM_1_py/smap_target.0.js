function f_gold(f, d, s) {
  let mem = [[0], [0]];
  for (let i = 1; i <= d; i++) {
    for (let j = 1; j <= s; j++) {
        
        mem[i][j] = mem[i][j - 1] + mem[i - 1][j - 1];
        if (j - f - 1 >= 0) {
          mem[i][j] -= mem[i - 1][j - f - 1];
      
      }
    }
  }
  return mem[d][s];
}

