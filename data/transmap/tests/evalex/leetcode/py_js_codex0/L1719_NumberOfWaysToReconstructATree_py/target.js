
function f_gold (pairs) {
  var g = Array(510);
  for (var _i = 0; _i < 510; _i++) {
    g[_i] = Array(510);
    for (var _j = 0; _j < 510; _j++) {
      g[_i][_j] = false;
    }
  }
  var v = {};
  for (var _i2 = 0; _i2 < pairs.length; _i2++) {
    var x = pairs[_i2][0];
    var y = pairs[_i2][1];
    g[x][y] = g[y][x] = true;
    if (v[x] == undefined) v[x] = [];
    v[x].push(y);
    if (v[y] == undefined) v[y] = [];
    v[y].push(x);
  }
  var nodes = [];
  for (var _i3 = 0; _i3 < 510; _i3++) {
    if (v[_i3] != undefined) {
      nodes.push(_i3);
      g[_i3][_i3] = true;
    }
  }
  nodes.sort(function (x, y) {
    return v[x].length - v[y].length;
  });
  var equal = false;
  var root = 0;
  for (var _i4 = 0; _i4 < nodes.length; _i4++) {
    var x = nodes[_i4];
    var j = _i4 + 1;
    while (j < nodes.length && !g[x][nodes[j]]) {
      j++;
    }
    if (j < nodes.length) {
      var y = nodes[j];
      if (v[x].length == v[y].length) {
        equal = true;
      }
      for (var _i5 = 0; _i5 < v[x].length; _i5++) {
        var z = v[x][_i5];
        if (!g[y][z]) {
          return 0;
        }
     