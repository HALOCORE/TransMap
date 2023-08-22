function f_gold(a, b, k, n1, n2) {
  let s = new Set();
  for (let i = 0; i < n2; i++) s.add(b[i]);
  let missing = 0;
  for (let i = 0; i < n1; i++) {
    if (!s.has(a[i])) missing += 1;
    if (missing == k) return a[i];
  }
  return -1;
}

