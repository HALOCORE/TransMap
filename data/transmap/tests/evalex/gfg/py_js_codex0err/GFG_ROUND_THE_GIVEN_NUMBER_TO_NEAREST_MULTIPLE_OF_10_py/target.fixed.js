function f_gold(n) {
  var a = Math.floor(n / 10) * 10;
  var b = a + 10;
  return (n - a > b - n)? b : a;
}

