function f_gold(arr, n) {
  arr.sort(function (a, b) {
    return b - a;
  });
  var dimension = [0, 0];
  var i = 0;
  var j = 0;
  while (i < n - 1 && j < 2) {
    if (arr[i] == arr[i + 1]) {
      dimension[j] = arr[i];
      j++;
      i++;
    }
    i++;
  }
  return dimension[0] * dimension[1];
}

