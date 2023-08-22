function f_gold(str) {
  var res = str[0].charCodeAt(0) - 48;
  for (var i = 1; i < str.length; i++) {
    if (str[i] == '0' || str[i] == '1' || res < 2) res += str[i].charCodeAt(0) - 48;
    else res *= str[i].charCodeAt(0) - 48;
  }
  return res;
}

