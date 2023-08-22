function f_gold(a, n) {
  var count_odd = 0;
  var count_even = 0;
  for (var i = 0; i < n; i++) {
    if (a[i] & 1) count_odd += 1;
    else count_even += 1;
  }
  if (count_odd % 2 && count_even % 2) return false;
  else return true;
}

