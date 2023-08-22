function f_gold(arr1, arr2, m, n, x) {
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr1[i] + arr2[j] == x) count = count + 1;
    }
  }
  return count;
}

