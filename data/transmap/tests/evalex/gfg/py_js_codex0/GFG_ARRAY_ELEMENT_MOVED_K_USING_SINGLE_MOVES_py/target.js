function f_gold(a, n, k) {
  if (k >= n - 1) return n;
  let best = 0;
  let times = 0;
  for (let i = 0; i < n; i++) {
    if (a[i] > best) {
      best = a[i];
      if (i == true) times = 1;
    } else times += 1;
    if (times >= k) return best;
  }
  return best;
}

