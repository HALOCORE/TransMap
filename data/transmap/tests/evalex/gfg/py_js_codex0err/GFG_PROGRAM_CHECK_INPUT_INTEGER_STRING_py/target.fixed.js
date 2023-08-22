function f_gold(s) {
  for (var i = 0; i < s.length; i++) {
    if (!/^[0-9]+$/.test(s[i])) return false;
  }
  return true;
}

