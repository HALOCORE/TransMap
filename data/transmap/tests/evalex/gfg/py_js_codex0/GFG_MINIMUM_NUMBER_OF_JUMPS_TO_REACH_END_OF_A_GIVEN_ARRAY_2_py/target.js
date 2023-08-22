function f_gold(arr, n) {
  var jumps = Array(n).fill(0);
  for (var i = n - 2; i >= 0; i--) {
    if (arr[i] == 0) jumps[i] = Number.POSITIVE_INFINITY;
    else if (arr[i] >= n - i - 1) jumps[i] = 1;
    else {
      var min = Number.POSITIVE_INFINITY;
      for (var j = i + 1; j < n; j++) {
        if (j <= arr[i] + i) {
          if (min > jumps[j]) min = jumps[j];
        }
      }
      if (min != Number.POSITIVE_INFINITY) jumps[i] = min + 1;
      else jumps[i] = min;
    }
  }
  return jumps[0];
}

