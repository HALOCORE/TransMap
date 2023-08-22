function f_gold(n) {
  var ugly = Array(n).fill(0);
  ugly[0] = 1;
  var i2 = 0;
  var i3 = 0;
  var i5 = 0;
  var next_multiple_of_2 = 2;
  var next_multiple_of_3 = 3;
  var next_multiple_of_5 = 5;
  for (var l = 1; l < n; l++) {
    ugly[l] = Math.min(next_multiple_of_2, next_multiple_of_3, next_multiple_of_5);
    if (ugly[l] == next_multiple_of_2) {
      i2 += 1;
      next_multiple_of_2 = ugly[i2] * 2;
    }
    if (ugly[l] == next_multiple_of_3) {
      i3 += 1;
      next_multiple_of_3 = ugly[i3] * 3;
    }
    if (ugly[l] == next_multiple_of_5) {
      i5 += 1;
      next_multiple_of_5 = ugly[i5] * 5;
    }
  }
  return ugly[ugly.length - 1];
}

