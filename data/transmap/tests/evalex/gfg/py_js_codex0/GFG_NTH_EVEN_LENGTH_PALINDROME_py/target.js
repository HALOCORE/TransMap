function f_gold(n) {
  var res = n;
  for (var j = n.length - 1; j >= 0; j--) res += n[j];
  return res;
}

