function f_gold(a, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((a[i] & a[j]) == 0) count += 2;
    }
  }
  return count;
}

