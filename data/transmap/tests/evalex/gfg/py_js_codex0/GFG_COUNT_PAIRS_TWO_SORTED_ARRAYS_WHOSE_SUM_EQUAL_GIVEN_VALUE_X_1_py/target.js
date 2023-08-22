function f_gold(arr1, arr2, m, n, x) {
  let count = 0;
  let us = new Set();
  for (let i = 0; i < m; i++) us.add(arr1[i]);
  for (let j = 0; j < n; j++) {
    if (us.has(x - arr2[j])) count++;
  }
  return count;
}

