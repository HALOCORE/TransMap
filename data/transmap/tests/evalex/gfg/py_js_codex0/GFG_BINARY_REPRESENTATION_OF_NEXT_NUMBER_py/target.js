function f_gold(num1) {
  var l = num1.length;
  var num = num1.split("");
  var i = l - 1;
  while (i >= 0) {
    if (num[i] == '0') {
      num[i] = '1';
      break;
    } else {
      num[i] = '0';
    }
    i -= 1;
  }
  num1 = num.join("");
  if (i < 0) {
    num1 = '1' + num1;
  }
  return num1;
}

