function f_gold(str) {
  var zeros = 0;
  var ones = 0;
  for (var i = 0; i < str.length; i++) {
    var ch = str[i];
    if (ch == '0') zeros = zeros + 1;
    else ones = ones + 1;
  }
  return zeros == 1 || ones == 1;
}

