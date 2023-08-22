
function f_gold (grid) {
  function find () {
    for (var i = 0; i < m; i++) {
      for (var j = 0; j < n; j++) {
        if (grid[i][j] == 1) {
          return [i, j];
        }
      }
    }
  }
  function dfs (i, j) {
    q.push([i, j]);
    grid[i][j] = 2;
    for (var _i = 0, dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]; _i < dirs.length; _i++) {
      var a = dirs[_i][0];
      var b = dirs[_i][1];
      var x = i + a;
      var y = j + b;
      if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] == 1) {
        dfs(x, y);
      }
    }
  }
  var m = grid.length;
  var n = grid[0].length;
  var q = [];
  var dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  var _find = find(),
      i = _find[0],
      j = _find[1];
  dfs(i, j);
  var ans = -1;
  while (q.length > 0) {
    ans += 1;
    for (var _i2 = 0; _i2 < q.length; _i2++) {
      var _q$shift = q.shift(),
          _i3 = _q$shift[0],
          _j = _q$shift[1];
      for (var _i4 = 0, _dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]; _i4 < _dirs.length; _i4++) {
        var _a = _dirs[_i4][0];
        var _b = _dirs[_i4][1];
        var _