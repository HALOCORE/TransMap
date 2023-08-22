function f_gold(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      return str[i];
    }
  }
  return 0;
}

