function f_gold(arr, n) {
  var res = 0;
  var m = {};
  for (var i = 0; i < n; i++) {
    var Sum = 0;
    for (var j = i; j < n; j++) {
      Sum += arr[j];
      m[Sum] = m.get(Sum, 0) + 1;
    }
  }
  for (var x in m) {
    if (m[x] == 1) res += x;
  }
  return res;
}

