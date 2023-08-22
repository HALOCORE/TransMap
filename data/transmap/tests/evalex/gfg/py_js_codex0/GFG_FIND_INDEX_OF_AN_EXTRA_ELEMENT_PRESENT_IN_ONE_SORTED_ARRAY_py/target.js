function f_gold(arr1, arr2, n) {
  for (let i = 0; i < n; i++) {
    if (arr1[i] != arr2[i]) return i;
  }
  return n;
}

