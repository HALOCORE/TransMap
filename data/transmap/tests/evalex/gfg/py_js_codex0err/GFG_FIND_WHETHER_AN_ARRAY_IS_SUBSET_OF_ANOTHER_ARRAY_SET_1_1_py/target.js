function f_gold(arr1, arr2, m, n) {
  var i = 0;
  var j = 0;
  if (m < n) return 0;
  arr1.sort();
  arr2.sort();
  while (i < n && j < m) {
    if (arr1[j] < arr2[i]) j += 1;
    else if (arr1[j] == arr2[i]) {
      j += 1;
      i += 1;
    }
    else if (arr1[j] > arr2[i]) return 0;
  }
  return i < n ? false : true;
}

