function f_gold(arr, n) {
  var invcount = 0;
  for (var i = 1; i < n - 1; i++) {
    var small = 0;
    for (var j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) small += 1;
    }
    var great = 0;
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) great += 1;
    }
    invcount += great * small;
  }
  return invcount;
}

