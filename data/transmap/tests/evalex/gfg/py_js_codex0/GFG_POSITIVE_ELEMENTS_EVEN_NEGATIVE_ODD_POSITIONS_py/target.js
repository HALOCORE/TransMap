function f_gold(a, size) {
  var positive = 0;
  var negative = 1;
  while (true) {
    while (positive < size && a[positive] >= 0) positive = positive + 2;
    while (negative < size && a[negative] <= 0) negative = negative + 2;
    if (positive < size && negative < size) {
      var temp = a[positive];
      a[positive] = a[negative];
      a[negative] = temp;
    } else break;
  }
}

