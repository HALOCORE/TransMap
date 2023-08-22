function f_gold(arr1, arr2, n) {
  var index = n;
  var left = 0;
  var right = n - 1;
  while(left <= right) {
    var mid = Math.floor((left + right) / 2);
    if(arr2[mid] == arr1[mid]) left = mid + 1;
    else {
      index = mid;
      right = mid - 1;
    }
  }
  return index;
}

