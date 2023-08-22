function f_gold(arr, n) {
  var res = 1;
  for (var i = 0; i < n; i++) {
    if (arr[i] <= res) res = res + arr[i];
    else break;
  }
  return res;
}

