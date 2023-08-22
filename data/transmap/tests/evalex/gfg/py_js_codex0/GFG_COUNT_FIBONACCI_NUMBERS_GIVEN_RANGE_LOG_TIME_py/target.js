function f_gold(low, high) {
  var f1 = 0;
  var f2 = 1;
  var f3 = 1;
  var result = 0;
  while (f1 <= high) {
    if (f1 >= low) result += 1;
    f1 = f2;
    f2 = f3;
    f3 = f1 + f2;
  }
  return result;
}

