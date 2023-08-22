function f_gold(str) {
  var one_count = 0;
  var zero_count = 0;
  var n = str.length;
  for (var i = 0; i < n; i++) {
    if (str[i] == '1') one_count += 1;
    else zero_count += 1;
  }
  if (one_count % 2 == 0) return zero_count;
  return one_count;
}

