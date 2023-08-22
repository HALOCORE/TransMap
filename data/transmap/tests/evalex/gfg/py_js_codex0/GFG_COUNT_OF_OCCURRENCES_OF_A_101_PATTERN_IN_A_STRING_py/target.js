function f_gold(s) {
  var length = s.length;
  var oneSeen = false;
  var count = 0;
  for (var i = 0; i < length; i++) {
    if (s[i] == '1' && oneSeen) {
      if (s[i - 1] == '0') count += 1;
    }
    if (s[i] == '1' && oneSeen == 0) oneSeen = true;
    if (s[i] != '0' && s[i] != '1') oneSeen = false;
  }
  return count;
}

