function f_gold(arr, n) {
  var vis = {};
  for (var i = 0; i < n; i++) vis[arr[i]] = 1;
  var k = Object.keys(vis).length;
  var vid = {};
  var ans = 0;
  var right = 0;
  var window = 0;
  for (var left = 0; left < n; left++) {
    while (right < n && window < k) {
      if (arr[right] in vid) vid[arr[right]] += 1;
      else vid[arr[right]] = 1;
      if (vid[arr[right]] == 1) window += 1;
      right += 1;
    }
    if (window == k) ans += n - right + 1;
    vid[arr[left]] -= 1;
    if (vid[arr[left]] == 0) window -= 1;
  }
  return ans;
}

