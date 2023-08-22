function f_gold(a, arr_size) {
  var lo = 0;
  var hi = arr_size - 1;
  var mid = 0;
  while (mid <= hi) {
    if (a[mid] == 0) {
      let temp = a[mid];
      a[mid] = a[lo];
      a[lo] = temp;
      lo = lo + 1;
      mid = mid + 1;
    } else if (a[mid] == 1) mid = mid + 1;
    else {
      let temp = a[hi];
      a[hi] = a[mid];
      a[mid] = temp;
      hi = hi - 1;
    }
  }
}

