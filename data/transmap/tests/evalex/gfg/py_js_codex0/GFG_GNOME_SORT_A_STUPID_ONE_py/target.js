function f_gold(arr, n) {
  var index = 0;
  while (index < n) {
    if (index == 0) index = index + 1;
    if (arr[index] >= arr[index - 1]) index = index + 1;
    else {
      var temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index = index - 1;
    }
  }
  return arr;
}

