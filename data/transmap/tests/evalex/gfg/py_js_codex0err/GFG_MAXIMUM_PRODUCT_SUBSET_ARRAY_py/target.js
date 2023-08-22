function f_gold(a, n) {
  if (n == 1) return a[0];
  var max_neg = -999999999999;
  var count_neg = 0;
  var count_zero = 0;
  var prod = 1;
  for (var i = 0; i < n; i++) {
    if (a[i] == 0) {
      count_zero += 1;
      continue;
    }
    if (a[i] < 0) {
      count_neg += 1;
      max_neg = Math.max(max_neg, a[i]);
    }
    prod = prod * a[i];
  }
  if (count_zero == n) return 0;
  if (count_neg & 1) {
    if (count_neg == 1 && count_zero > 0 && count_zero + count_neg == n) return 0;
    prod = parseInt(prod / max_neg);
  }
  return prod;
}

