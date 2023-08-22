function f_gold(n) {
  var res = [];
  res.push(0);
  res.push(1);
  var i = 2;
  while (i < n + 1) {
    res.push(Math.max(i, (res[Math.floor(i / 2)] + res[Math.floor(i / 3)] + res[Math.floor(i / 4)] + res[Math.floor(i / 5)])));
    i = i + 1;
  }
  return res[n];
}

