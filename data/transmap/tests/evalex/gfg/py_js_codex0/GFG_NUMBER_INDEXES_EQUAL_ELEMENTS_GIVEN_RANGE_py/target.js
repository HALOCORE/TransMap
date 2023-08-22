function f_gold(a, n, l, r) {
  let count = 0;
  for (let i = l; i < r; i++) {
    if (a[i] == a[i + 1]) count += 1;
  }
  return count;
}

