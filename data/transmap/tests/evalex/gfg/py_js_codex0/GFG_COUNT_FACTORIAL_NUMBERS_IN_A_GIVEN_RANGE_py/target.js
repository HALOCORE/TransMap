function f_gold(low, high) {
  var fact = 1;
  var x = 1;
  while (fact < low) {
    fact = fact * x;
    x += 1;
  }
  var res = 0;
  while (fact <= high) {
    res += 1;
    fact = fact * x;
    x += 1;
  }
  return res;
}

