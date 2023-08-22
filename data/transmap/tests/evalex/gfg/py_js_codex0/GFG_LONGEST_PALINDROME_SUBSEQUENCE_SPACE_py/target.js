function f_gold(s) {
  var n = s.length;
  var a = Array(n).fill(0);
  for (var i = n - 1; i >= 0; i--) {
    var back_up = 0;
    for (var j = i; j < n; j++) {
      if (j == i) a[j] = 1;
      else if (s[i] == s[j]) {
        var temp = a[j];
        a[j] = back_up + 2;
        back_up = temp;
      } else {
        back_up = a[j];
        a[j] = Math.max(a[j - 1], a[j]);
      }
    }
  }
  return a[n - 1];
}

