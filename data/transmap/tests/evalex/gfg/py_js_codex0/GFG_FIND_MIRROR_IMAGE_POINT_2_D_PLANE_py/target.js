function f_gold(a, b, c, x1, y1) {
  var temp = - 2 *(a * x1 + b * y1 + c)/(a * a + b * b);
  var x = temp * a + x1;
  var y = temp * b + y1;
  return [x, y];
}

