function f_gold(str) {
  var i = str.length - 1;
  var start = i + 1, end = i + 1;
  var result = "";
  while (i >= 0) {
    if (str[i] == " ") {
      start = i + 1;
      while (start != end) {
        result += str[start];
        start += 1;
      }
      result += " ";
      end = i;
    }
    i -= 1;
  }
  start = 0;
  while (start != end) {
    result += str[start];
    start += 1;
  }
  return result;
}

