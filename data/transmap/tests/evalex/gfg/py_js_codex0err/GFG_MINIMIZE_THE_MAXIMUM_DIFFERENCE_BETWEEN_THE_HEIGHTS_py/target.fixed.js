function f_gold(arr, n, k) {
  if(n == 1) return 0;
  arr.sort((a, b) => a-b);
  var ans = arr[(n - 1 + arr.length)%arr.length] - arr[0];
  var small = arr[0] + k;
  var big = arr[(n - 1 + arr.length)%arr.length] - k;
  if(small > big) {
    let temp = small;
    small = big;
    big = temp;
  }
  for(var i = 1; i < n - 1; i++) {
    var subtract = arr[i] - k;
    var add = arr[i] + k;
    if(subtract >= small || add <= big) continue;
    if(big - subtract <= add - small) small = subtract;
    else big = add;
  }
  return Math.min(ans, big - small);
}

