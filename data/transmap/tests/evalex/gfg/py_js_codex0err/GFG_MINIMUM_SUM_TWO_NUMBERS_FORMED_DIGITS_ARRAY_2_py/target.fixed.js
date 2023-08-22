function f_gold(a, n) {
  a.sort((a, b) => a-b);
  var num1 = 0;
  var num2 = 0;
  for (var i = 0; i < n; i++) {
    if (i % 2 == 0) num1 = num1 * 10 + a[i];
    else num2 = num2 * 10 + a[i];
  }
  return num2 + num1;
}

