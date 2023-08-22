function f_gold(a, b, c) {
  var x = a - b;
  var y = b - c;
  var z = a - c;
  if (x * y > 0) return b;
  else if (x * z > 0) return;
  else return a;
}

