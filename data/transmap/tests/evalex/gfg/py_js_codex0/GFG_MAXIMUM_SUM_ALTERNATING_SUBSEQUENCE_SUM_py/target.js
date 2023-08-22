function f_gold(arr, n) {
  if(n == 1) return arr[0];
  var dec = Array(n + 1).fill(0);
  var inc = Array(n + 1).fill(0);
  dec[0] = inc[0] = arr[0];
  var flag = 0;
  for(var i = 1; i < n; i++) {
    for(var j = 0; j < i; j++) {
      if(arr[j] > arr[i]) {
        dec[i] = Math.max(dec[i], inc[j] + arr[i]);
        flag = 1;
      }
      else if(arr[j] < arr[i] && flag == 1) inc[i] = Math.max(inc[i], dec[j] + arr[i]);
    }
  }
  var result = - 2147483648;
  for(var i = 0; i < n; i++) {
    if(result < inc[i]) result = inc[i];
    if(result < dec[i]) result = dec[i];
  }
  return result;
}

