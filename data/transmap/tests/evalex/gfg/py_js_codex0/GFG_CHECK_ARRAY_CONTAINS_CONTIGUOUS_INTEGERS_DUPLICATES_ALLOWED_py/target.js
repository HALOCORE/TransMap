function f_gold(arr, n) {
  var max1 = Math.max.apply(null, arr);
  var min1 = Math.min.apply(null, arr);
  var m = max1 - min1 + 1;
  if(m > n) return false;
  var visited = Array(m).fill(0);
  for(var i = 0;i < n;i++) visited[arr[i] - min1] = true;
  for(var i = 0;i < m;i++) {
    if(visited[i] == false) return false;
  }
  return true;
}

