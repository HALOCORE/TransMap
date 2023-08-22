function f_gold(a, n) {
  let count = {};
  for (let i = 0; i < n; i++) {
    if (typeof(count[a[i]]) !== 'undefined') count[a[i]] += 1;
    else count[a[i]] = 1;
  }
  let next_missing = 1;
  for (let i = 0; i < n; i++) {
    if (count[a[i]] != 1 || a[i] > n || a[i] < 1) {
      count[a[i]] -= 1;
      while (typeof(count[next_missing]) !== 'undefined') next_missing += 1;
      a[i] = next_missing;
      count[next_missing] = 1;
    }
  }
}

