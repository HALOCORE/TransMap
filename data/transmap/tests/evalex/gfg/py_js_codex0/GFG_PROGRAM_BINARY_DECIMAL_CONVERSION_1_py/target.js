function f_gold(n) {
  var num = n;
  var dec_value = 0;
  var base1 = 1;
  var len1 = num.length;
  for (var i = len1 - 1; i >= 0; i--) {
    if (num[i] == '1') dec_value += base1;
    base1 = base1 * 2;
  }
  return dec_value;
}

