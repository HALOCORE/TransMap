function f_gold(a, n) {
  if(n == 1) return a[0];
  var max_neg = Number.NEGATIVE_INFINITY;
  var min_pos = Number.POSITIVE_INFINITY;
  var count_neg = 0;
  var count_zero = 0;
  var prod = 1;
  for(var i = 0; i < n; i++) {
    if(a[i] == 0) {
      count_zero = count_zero + 1;
      continue;
    }
    if(a[i] < 0) {
      count_neg = count_neg + 1;
      max_neg = Math.max(max_neg, a[i]);
    }
    if(a[i] > 0) min_pos = Math.min(min_pos, a[i]);
    prod = prod * a[i];
  }
  if(count_zero == n || (count_neg == 0 && count_zero > 0)) return 0;
  if(count_neg == 0) return min_pos;
  if((count_neg & 1) == 0 && count_neg != 0) prod = parseInt(prod / max_neg);
  return prod;
}

