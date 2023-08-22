function f_gold(num1, num2) {
  var len1 = num1.length;
  var len2 = num2.length;
  if (len1 == 0 || len2 == 0) return "0";
  var result = new Array(len1 + len2).fill(0);
  var i_n1 = 0;
  var i_n2 = 0;
  for (var i = len1 - 1; i >= 0; i--) {
    var carry = 0;
    var n1 = num1.charCodeAt(i) - 48;
    i_n2 = 0;
    for (var j = len2 - 1; j >= 0; j--) {
      var n2 = num2.charCodeAt(j) - 48;
      var summ = n1 * n2 + result[i_n1 + i_n2] + carry;
      carry = Math.floor(summ / 10);
      result[i_n1 + i_n2] = summ % 10;
      i_n2++;
    }
    if (carry > 0) result[i_n1 + i_n2] += carry;
    i_n1++;
  }
  i = result.length - 1;
  while (i >= 0 && result[i] == 0) i--;
  if (i == -1) return "0";
  var s = "";
  while (i >= 0) {
    s += String.fromCharCode(result[i] + 48);
    i--;
  }
  return s;
}

