
function f_gold ( grid ) {
  function find ( x ) {
    if ( p[x] != x ) {
      p[x] = find(p[x]);
    }
    return p[x];
  }
  var m = grid.length;
  var n = grid[0].length;
  var p = list(range(m * n));
  var ans = Math.min(grid[0][0], grid[-1][-1]);
  var vis = {
    0: 0,
    m - 1: n - 1
  };
  var scores = [[grid[i][j], i, j] for (var i = 0; i < m; i++) for (var j = 0; j < n; j++)];
  scores.sort();
  while ( find(0) != find(m * n - 1) ) {
    var score = scores.pop();
    var i = score[1];
    var j = score[2];
    ans = Math.min(ans, score);
    vis.add({
      i: j
    });
    for (var a = 0; a < 2; a++) for (var b = 0; b < 2; b++) {
      var x = i + a;
      var y = j + b;
      if ( 0 <= x < m && 0 <= y < n && (x, y) in vis ) {
        p[find(x * n + y)] = find(i * n + j);
      }
    }
  }
  return ans;
}

