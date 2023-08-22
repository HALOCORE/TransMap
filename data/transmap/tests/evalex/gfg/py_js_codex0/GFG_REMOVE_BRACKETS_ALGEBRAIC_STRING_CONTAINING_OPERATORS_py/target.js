function f_gold(Str) {
  var Len = Str.length;
  var res = new Array(Len);
  var index = 0;
  var i = 0;
  var s = [];
  s.push(0);
  while (i < Len) {
    if (Str[i] == '+') {
      if (s[-1] == 1) {
        res[index] = '-';
        index += 1;
      }
      if (s[-1] == 0) {
        res[index] = '+';
        index += 1;
      }
    } else if (Str[i] == '-') {
      if (s[-1] == 1) {
        res[index] = '+';
        index += 1;
      } else if (s[-1] == 0) {
        res[index] = '-';
        index += 1;
      }
    } else if (Str[i] == '(' && i > 0) {
      if (Str[i - 1] == '-') {
        var x = 0;
        if (s[-1] == 1) x = 0;
        else x = 1;
        s.push(x);
      } else if (Str[i - 1] == '+') s.push(s[-1]);
    } else if (Str[i] == ')') s.pop();
    else {
      res[index] = Str[i];
      index += 1;
    }
    i += 1;
  }
  return res;
}

