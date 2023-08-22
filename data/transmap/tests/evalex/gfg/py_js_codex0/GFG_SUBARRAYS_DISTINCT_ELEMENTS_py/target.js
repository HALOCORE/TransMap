function f_gold(arr, n) {
  var s = [];
  var j = 0;
  var ans = 0;
  for (var i = 0; i < n; i++) {
    while (j < n && !s.includes(arr[j])) {
      s.push(arr[j]);
      j++;
    }
    ans += ((j - i) * (j - i + 1)) / 2;
    s.splice(s.indexOf(arr[i]), 1);
  }
  return ans;
}

