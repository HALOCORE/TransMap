function f_gold(n, p) {
  var ans = 0;
  var temp = p;
  while (temp <= n) {
    ans += n / temp;
    temp = temp * p;
  }
  return ans;
}

