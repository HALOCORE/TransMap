
function f_gold(arr, n) {
  let l = 0;
  let _sum = 0;
  let ans = 360;
  for (let i = 0; i < n; i++) {
    _sum += arr[i];
    while (_sum >= 180) {
      ans = Math.min(ans, 2 * Math.abs(180 - _sum));
      _sum -= arr[l];
      l += 1;
    }
    ans = Math.min(ans, 2 * Math.abs(180 - _sum));
  }
  return ans;
}

