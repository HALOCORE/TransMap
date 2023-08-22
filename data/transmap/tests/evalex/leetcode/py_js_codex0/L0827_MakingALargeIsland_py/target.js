
function f_gold ( grid ) {
  var n = grid.length;
  var p = Array.from(Array(n * n).keys());
  var size = Array(n * n).fill(1);
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
  function check ( i, j ) {
    return 0 <= i < n && 0 <= j < n && grid[i][j] == 1;
  }
  for ( var i = 0; i < n; i++ ) {
    for ( var j = 0; j < n; j++ ) {
      if ( grid[i][j] == 1 ) {
        for ( var x = 0; x < 2; x++ ) {
          for ( var y = 0; y < 2; y++ ) {
            if ( check(i + x, j + y) ) {
              union(i * n + j, (i + x) * n + j + y);
            }
          }
        }
      }
    }
  }
  var res = Math.max(...size);
  for ( var i = 0; i < n; i++ ) {
    for ( var j = 0; j < n; j++ ) {
      if ( grid[i][j] == 0 ) {
        var t = 1;
        var s = new Set();
        for ( var x = 0; x < 2; x++ ) {
          for ( var y = 0; y < 2; y++ ) {
            if ( check(i + x, j + y) ) {
              var root = find((i + x) * n + j + y);
              if ( !s.has(root) ) {
                t += size[root];
                s.add(root);
             