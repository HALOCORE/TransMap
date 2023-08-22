function f_gold(a, n) {
  a.sort((a, b) => a-b);
  var s = [];
  var i = 0;
  var j = n - 1;
  while (i < j) {
    s.push((a[i] + a[j]));
    i += 1;
    j -= 1;
  }
  var mini = Math.min.apply(null, s);
  var maxi = Math.max.apply(null, s);
  return Math.abs(maxi - mini);
}

