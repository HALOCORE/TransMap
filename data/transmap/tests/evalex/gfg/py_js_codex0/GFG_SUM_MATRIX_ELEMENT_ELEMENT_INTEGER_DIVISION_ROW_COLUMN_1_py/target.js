function f_gold(n) {
  var ans = 0;
  var temp = 0;
  for (var i = 1; i <= n; i++) {
    if (temp < n) {
      temp = i - 1;
      var num = 1;
      while (temp < n) {
        if (temp + i <= n) ans += i * num;
        else ans += (n - temp) * num;
        temp += i;
        num += 1;
      }
    }
  }
  return ans;
}

