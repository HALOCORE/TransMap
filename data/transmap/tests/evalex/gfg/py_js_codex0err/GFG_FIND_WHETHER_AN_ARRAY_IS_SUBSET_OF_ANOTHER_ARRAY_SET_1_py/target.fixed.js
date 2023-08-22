function f_gold(arr1, arr2, m, n) {
  var i = 0;
  var j = 0;
  for (i = 0; i < n; i++) {
    for (j = 0; j < m; j++) {
      if (arr2[i] == arr1[j]) break;
    }
    
  }
  return 1;
}

