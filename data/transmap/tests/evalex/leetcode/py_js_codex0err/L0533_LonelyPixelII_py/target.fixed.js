
function f_gold (picture, target) {
  var m = picture.length;
  var n = picture[0].length;
  var rows = Array(m).fill(0);
  var cols = new Map();
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (picture[i][j] == 'B') {
        rows[i] += 1;
        if (cols.has(j)) {
          cols.get(j).push(i);
        } else {
          cols.set(j, [i]);
        }
      }
    }
  }
  var t = Array(m).fill(0).map(() => Array(m).fill(false));
  for (var i = 0; i < m; i++) {
    for (var k = i; k < m; k++) {
      if (i == k) {
        t[i][k] = true;
      } else {
        t[i][k] = true;
        for (var j = 0; j < n; j++) {
          if (picture[i][j] != picture[k][j]) {
            t[i][k] = false;
            break;
          }
        }
      }
      t[k][i] = t[i][k];
    }
  }
  var res = 0;
  for (var i = 0; i < m; i++) {
    if (rows[i] == target) {
      for (var j = 0; j < n; j++) {
        if (cols.get(j) && cols.get(j).length == target && cols.get(j).every(k => t[i][k])) {
          res += 1;
        }
      }
    }
  }
  return res;
}

