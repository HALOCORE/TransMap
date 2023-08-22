function f_gold(arr, n) {
  let mp = {};
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) mp[arr[i] + arr[j]] = [i, j];
  }
  let d = (-10) ** 9;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let abs_diff = Math.abs(arr[i] - arr[j]);
      if (abs_diff in mp) {
        let p = mp[abs_diff];
        if (p[0] != i && p[0] != j && p[1] != i && p[1] != j) d = Math.max(d, Math.max(arr[i], arr[j]));
      }
    }
  }
  return d;
}

