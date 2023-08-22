function f_gold(n) {
  var a = (n / 10) * 10;
  var b = a + 10;
  return (n - a > b - n)? b : a;
}

