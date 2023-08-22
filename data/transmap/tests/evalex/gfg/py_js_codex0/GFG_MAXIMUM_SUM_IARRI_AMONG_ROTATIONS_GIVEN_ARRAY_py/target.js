function f_gold(arr, n) {
  var res = - Number.MAX_VALUE;
  for (var i = 0; i < n; i++) {
    var curr_sum = 0;
    for (var j = 0; j < n; j++) {
      var index = parseInt((i + j) % n);
      curr_sum += j * arr[index];
    }
    res = Math.max(res, curr_sum);
  }
  return res;
}

