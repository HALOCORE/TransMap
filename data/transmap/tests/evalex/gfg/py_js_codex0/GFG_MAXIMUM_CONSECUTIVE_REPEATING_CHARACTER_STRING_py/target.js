function f_gold(str) {
  var l = str.length;
  var count = 0;
  var res = str[0];
  for (var i = 0; i < l; i++) {
    var cur_count = 1;
    for (var j = i + 1; j < l; j++) {
      if (str[i] != str[j]) break;
      cur_count += 1;
    }
    if (cur_count > count) {
      count = cur_count;
      res = str[i];
    }
  }
  return res;
}

