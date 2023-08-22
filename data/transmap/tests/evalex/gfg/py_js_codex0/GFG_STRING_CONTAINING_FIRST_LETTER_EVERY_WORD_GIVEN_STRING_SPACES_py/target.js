function f_gold(str) {
  var result = "";
  var v = true;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ' ') v = true;
    else if (str[i] != ' ' && v == true) {
      result += (str[i]);
      v = false;
    }
  }
  return result;
}

