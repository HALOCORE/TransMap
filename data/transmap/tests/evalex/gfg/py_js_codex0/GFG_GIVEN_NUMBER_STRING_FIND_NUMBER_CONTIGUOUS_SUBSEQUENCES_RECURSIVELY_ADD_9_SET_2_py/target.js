function f_gold(number) {
  var n = number.length;
  var d = Array(9).fill(0);
  d[0] = 1;
  var result = 0;
  var mod_sum = 0;
  var continuous_zero = 0;
  for (var i = 0; i < n; i++) {
    if (number.charCodeAt(i) - '0'.charCodeAt(0) == 0) continuous_zero += 1;
    else continuous_zero = 0;
    mod_sum += number.charCodeAt(i) - '0'.charCodeAt(0);
    mod_sum %= 9;
    result += d[mod_sum];
    d[mod_sum] += 1;
    result -= continuous_zero;
  }
  return result;
}

