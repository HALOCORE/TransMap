function f_gold(arr, n) {
  var jumps = Array(n).fill(0);
  if(n == 0 || arr[0] == 0) return Number.POSITIVE_INFINITY;
  jumps[0] = 0;
  for(var i = 1;i < n;i++) {
    jumps[i] = Number.POSITIVE_INFINITY;
    for(var j = 0;j < i;j++) {
      if(i <= j + arr[j] && jumps[j] != Number.POSITIVE_INFINITY) {
        jumps[i] = Math.min(jumps[i], jumps[j] + 1);
        break;
      }
    }
  }
  return jumps[n - 1];
}

