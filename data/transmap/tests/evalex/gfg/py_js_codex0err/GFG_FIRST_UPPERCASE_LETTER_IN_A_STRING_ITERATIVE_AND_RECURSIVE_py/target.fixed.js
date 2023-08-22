function f_gold(str) {
  for (var i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      return str[i];
    }
  }
  return 0;
}

