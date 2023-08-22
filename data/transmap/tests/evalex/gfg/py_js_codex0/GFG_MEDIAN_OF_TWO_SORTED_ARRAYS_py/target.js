function f_gold(ar1, ar2, n) {
  var i = 0;
  var j = 0;
  var m1 = - 1;
  var m2 = - 1;
  var count = 0;
  while (count < n + 1) {
    count += 1;
    if (i == n) {
      m1 = m2;
      m2 = ar2[0];
      break;
    }
    else if (j == n) {
      m1 = m2;
      m2 = ar1[0];
      break;
    }
    if (ar1[i] < ar2[j]) {
      m1 = m2;
      m2 = ar1[i];
      i += 1;
    }
    else {
      m1 = m2;
      m2 = ar2[j];
      j += 1;
    }
  }
  return(m1 + m2) / 2;
}

