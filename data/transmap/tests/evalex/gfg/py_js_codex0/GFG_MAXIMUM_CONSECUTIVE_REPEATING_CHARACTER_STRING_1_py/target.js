function f_gold(str) {
  var n = str.length;
  var count = 0;
  var res = str[0];
  var cur_count = 1;
  for (var i = 0; i < n; i++) {
    if (i < n - 1 && str[i] == str[i + 1]) cur_count += 1;
    else {
      if (cur_count > count) {
        count = cur_count;
        res = str[i];
      }
      cur_count = 1;
    }
  }
  return res;
}

