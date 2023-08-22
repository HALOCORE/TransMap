function f_gold(n) {
  var ans = 0;
  for (var length = 1; length <= Math.sqrt(n); length++) {
    var height = length;
    while (height * length <= n) {
      ans++;
      height++;
    }
  }
  return ans;
}

