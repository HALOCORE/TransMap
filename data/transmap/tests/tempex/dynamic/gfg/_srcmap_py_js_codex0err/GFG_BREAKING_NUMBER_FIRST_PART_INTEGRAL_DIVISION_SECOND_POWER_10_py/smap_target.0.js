function f_gold(N) {
  var length = N.length;
  var l = Math.floor((length) / 2);
  var count = 0;
  for (var i = 0; i < l + 1; i++) {
    var s = N.substring(0, 0 + i);
    var l1 = s.length;
    var t = N.substring(i, l1 + i);
    try {
      if (s[0] == '0' || t[0] == '0') continue;
    } catch (e) {
      continue;
    }
    if (s == t) count += 1;
  }
  return count;
}

