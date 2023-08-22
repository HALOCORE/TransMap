
function f_gold ( grid, hits ) {
  function find ( x ) {
    if ( p[x] != x ) {
      p[x] = find(p[x]);
    }
    return p[x];
  }
  function union ( a, b ) {
    var pa = find(a);
    var pb = find(b);
    if ( pa != pb ) {
      size[pb] += size[pa];
      p[pa] = pb;
    }
  }
  var m = grid.length;
  var n = grid[0].length;
  var p = Array.from(Array(m * n + 1).keys());
  var size = Array(p.length).fill(1);
  var g = JSON.parse(JSON.stringify(grid));
  for ( var i = 0; i < hits.length; i++ ) {
    var j = hits[i];
    g[i][j] = 0;
  }
  for ( var j = 0; j < n; j++ ) {
    if ( g[0][j] == 1 ) {
      union(j, m * n);
    }
  }
  for ( var i = 1; i < m; i++ ) {
    for ( var j = 0; j < n; j++ ) {
      if ( g[i][j] == 0 ) {
        continue;
      }
      if ( g[i - 1][j] == 1 ) {
        union(i * n + j, (i - 1) * n + j);
      }
      if ( j > 0 && g[i][j - 1] == 1 ) {
        union(i * n + j, i * n + j - 1);
      }
    }
  }
  var ans = [];
  for ( var i = hits.length - 1; i >= 0; i-- ) {
    var j = hits[i];
    if ( grid[i][j] == 0 ) {
      ans.push(0);
      continue;
    }
    g[i][j] = 1;
    var prev = size[find(m * n