function f_gold(s) {
  for (var i = 0; i < s.length; i++) {
    if (s[i].isdigit() != true) return false;
  }
  return true;
}

