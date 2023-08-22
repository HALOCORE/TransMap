function f_gold(p) {
  var first = 1;
  var second = 1;
  var number = 2;
  var next = 1;
  while (next) {
    next = (first + second) % p;
    first = second;
    second = next;
    number = number + 1;
  }
  return number;
}

