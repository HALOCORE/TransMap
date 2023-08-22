function f_gold(arr1, arr2, m, n, x) {
  var count = 0;
  var l = 0;
  var r = n - 1;
  while (l < m && r >= 0) {
    if ((arr1[l] + arr2[r]) == x) {
      l += 1;
      r -= 1;
      count += 1;
    } else if ((arr1[l] + arr2[r]) < x) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return count;
}

