function f_gold(arr, n) {
  var sum = 0;
  var maxsize = -1;
  for (var i = 0; i < n - 1; i++) {
    sum = arr[i] == 0 ? -1 : 1;
    for (var j = i + 1; j < n; j++) {
      sum = sum + (arr[j] == 0 ? -1 : 1);
      if (sum == 0 && maxsize < j - i + 1) {
        maxsize = j - i + 1;
        startindex = i;
      }
    }
  }
  if (maxsize == -1) console.log("No such subarray");
  else console.log(startindex, "to", startindex + maxsize - 1);
  return maxsize;
}

