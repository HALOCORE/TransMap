function f_gold(arr, n) {
  var temp = n * [null];
  var small = 0;
  var large = n - 1;
  var flag = true;
  for (var i = 0; i < n; i++) {
    if (flag === true) {
      temp[i] = arr[large];
      large -= 1;
    } else {
      temp[i] = arr[small];
      small += 1;
    }
    flag = Boolean(1 - flag);
  }
  for (var i = 0; i < n; i++) arr[i] = temp[i];
  return arr;
}

