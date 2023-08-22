function f_gold(s) {
  var b_count = 0;
  var res = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[s.length - 1 - i] == 'a') {
      res = res + b_count;
      b_count = b_count * 2;
    } else {
      b_count += 1;
    }
  }
  return res;
}

