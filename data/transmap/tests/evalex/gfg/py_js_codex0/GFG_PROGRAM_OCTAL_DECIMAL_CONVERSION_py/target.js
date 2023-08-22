function f_gold(n) {
  var num = n;
  var dec_value = 0;
  var base = 1;
  var temp = num;
  while (temp) {
    var last_digit = temp % 10;
    temp = Math.floor(temp / 10);
    dec_value += last_digit * base;
    base = base * 8;
  }
  return dec_value;
}

