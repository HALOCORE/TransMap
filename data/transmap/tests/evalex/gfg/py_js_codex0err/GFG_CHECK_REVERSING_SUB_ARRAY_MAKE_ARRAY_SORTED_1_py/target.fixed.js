function f_gold(arr, n) {
  if(n == 1) return true;
  var i = 1;
  for(i = 1; i < n; i++) {
    if(arr[i - 1] < arr[i]) {
      if(i == n) return true;
    }
  }
  var j = i - 1;
  while(arr[j] < arr[j - 1]) {
    if(i > 1 && arr[j] < arr[i - 2]) return false;
    j += 1;
  }
  if(j == n) return true;
  var k = j;
  if(arr[k] < arr[i - 1]) return false;
  while(k > 1 && k < n) {
    if(arr[k] < arr[k - 1]) return false;
    k += 1;
  }
  return true;
}

