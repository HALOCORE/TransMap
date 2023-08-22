function f_gold(arr, n) {
  var um = {};
  for (var i = 0; i < 10; i++) {
    um[i] = 0;
  }
  var sum = 0;
  var maxLen = 0;
  for (var i = 0; i < n; i++) {
    if (arr[i] == 0) sum += - 1;
    else sum += 1;
    if (sum == 1) maxLen = i + 1;
    else if (!(sum in um)) um[sum] = i;
    if ((sum - 1) in um) {
      if (maxLen < (i - um[sum - 1])) maxLen = i - um[sum - 1];
    }
  }
  return maxLen;
}

