function f_gold(n) {
  var a = (n / 10) * 10;
  var b = a + 10;
  return (b if n - a > b - n else a);
}

