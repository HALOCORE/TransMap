function f_gold(array, m, n) {
  let counter = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (array[i][j] == 0) counter = counter + 1;
    }
  }
  return counter > (m * n) / 2;
}

