function f_gold(arr1, arr2, m, n, k) {
  var sorted1 = Array(m+n).fill(0);
  var i = 0;
  var j = 0;
  var d = 0;
  while (i < m && j < n) {
    if (arr1[i] < arr2[j]) {
      sorted1[d] = arr1[i];
      i++;
    } else {
      sorted1[d] = arr2[j];
      j++;
    }
    d++;
  }
  while (i < m) {
    sorted1[d] = arr1[i];
    d++;
    i++;
  }
  while (j < n) {
    sorted1[d] = arr2[j];
    d++;
    j++;
  }
  return sorted1[k - 1];
}

