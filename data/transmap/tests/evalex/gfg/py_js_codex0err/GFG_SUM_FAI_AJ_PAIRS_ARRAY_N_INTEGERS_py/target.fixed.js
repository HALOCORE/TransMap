function f_gold(a, n) {
  var cnt = {};
  var ans = 0;
  var pre_sum = 0;
  for (var i = 0; i < n; i++) {
    ans += (i * a[i]) - pre_sum;
    pre_sum += a[i];
    if ((a[i] - 1) in cnt) ans -= cnt[a[i] - 1];
    if ((a[i] + 1) in cnt) ans += cnt[a[i] + 1];
    if (!(a[i] in cnt)) cnt[a[i]] = 0;
    cnt[a[i]] += 1;
  }
  return ans;
}

