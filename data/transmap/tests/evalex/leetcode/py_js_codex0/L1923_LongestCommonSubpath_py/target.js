
function f_gold (n, paths) {
  function get (l, r, h) {
    return (h[r] - h[l - 1] * p[r - l + 1]) % mod;
  }
  function check (l) {
    var cnt = new Map();
    for (var k = 0; k < paths.length; k++) {
      var vis = new Set();
      for (var i = 0; i < paths[k].length - l + 1; i++) {
        var j = i + l - 1;
        var x = get(i + 1, j + 1, hh[k]);
        if (!vis.has(x)) {
          vis.add(x);
          if (cnt.has(x)) cnt.set(x, cnt.get(x) + 1);
          else cnt.set(x, 1);
        }
      }
    }
    var max = 0;
    for (var [key, value] of cnt) {
      if (value > max) max = value;
    }
    return max == paths.length;
  }
  var base = 133331;
  var mod = Math.pow(2, 64) + 1;
  var p = new Array(100010).fill(0);
  p[0] = 1;
  for (var i = 1; i < p.length; i++) {
    p[i] = (p[i - 1] * base) % mod;
  }
  var hh = [];
  for (var path of paths) {
    var h = new Array(path.length + 10).fill(0);
    for (var j = 0; j < path.length; j++) {
      h[j + 1] = (h[j] * base) % mod + path[j];
    }
    hh.push(h);
  }
  var left = 0;
  var right = Math.min(...paths.map(path => path.length));
  while (left < right) {
    var mid = (left + right + 1) >> 1;
    if (check(mid))