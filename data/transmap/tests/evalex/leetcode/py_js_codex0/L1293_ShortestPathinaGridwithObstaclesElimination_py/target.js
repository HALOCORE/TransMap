
function f_gold (grid, k) {
  var m = grid.length;
  var n = grid[0].length;
  if (k >= m + n - 3) return m + n - 2;
  var q = new Array();
  q.push([0, 0, k]);
  var vis = new Set();
  vis.add([0, 0, k]);
  var ans = 0;
  while (q.length > 0) {
    ans += 1;
    for (var _ = 0; _ < q.length; _++) {
      var i = q[0][0];
      var j = q[0][1];
      var k = q[0][2];
      q.shift();
      for (var a = 0; a < 2; a++) {
        for (var b = 0; b < 2; b++) {
          var x = i + a;
          var y = j + b;
          if (0 <= x && x < m && 0 <= y && y < n) {
            if (x == m - 1 && y == n - 1) return ans;
            if (grid[x][y] == 0 && !vis.has([x, y, k])) {
              q.push([x, y, k]);
              vis.add([x, y, k]);
            }
            if (grid[x][y] == 1 && k > 0 && !vis.has([x, y, k - 1])) {
              q.push([x, y, k - 1]);
              vis.add([x, y, k - 1]);
            }
          }
        }
      }
    }
  }
  return -1;
}

