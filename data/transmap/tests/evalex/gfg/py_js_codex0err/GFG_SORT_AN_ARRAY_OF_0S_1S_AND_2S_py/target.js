function f_gold(a, arr_size) {
  var lo = 0;
  var hi = arr_size - 1;
  var mid = 0;
  while (mid <= hi) {
    if (a[mid] == 0) {
      a[lo] = a[lo] ^ a[mid];
      a[mid] = a[lo] ^ a[mid];
      a[lo] = a[lo] ^ a[mid];
      lo = lo + 1;
      mid = mid + 1;
    } else if (a[mid] == 1) mid = mid + 1;
    else {
      a[mid] = a[mid] ^ a[hi];
      a[hi] = a[mid] ^ a[hi];
      a[mid] = a[mid] ^ a[hi];
      hi = hi - 1;
    }
  }
}

