function f_gold(ar, m, n) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if ((ar[i][j] % 2) == 0) even += 1;
      else odd += 1;
    }
  }
  console.log(" Frequency of odd number =", odd);
  console.log(" Frequency of even number =", even);
}

