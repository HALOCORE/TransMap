function f_gold(num) {
  var l = num.length;
  var count_zero = 0;
  var i = 1;
  while (i < l) {
    var ch = num[i];
    if (ch == "0") count_zero = count_zero + 1;
    i = i + 1;
  }
  return count_zero;
}

