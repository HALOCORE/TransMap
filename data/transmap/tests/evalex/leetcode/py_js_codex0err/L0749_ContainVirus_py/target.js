
function f_gold (isInfected) {
  function dfs (i, j) {
    vis[i][j] = true;
    areas[-1].add([i, j]);

    for (let a = 0, b = -1; a < 2; a++, b = 1) {
      for (let c = 0, d = -1; c < 2; c++, d = 1) {
        if (a == c) continue;
        let x = i + a;
        let y = j + b;
        if (0 <= x < m && 0 <= y < n) {
          if (isInfected[x][y] == 1 && !vis[x][y]) {
            dfs(x, y);
          } else if (isInfected[x][y] == 0) {
            c[-1] += 1;
            boundaries[-1].add([x, y]);
          }
        }
      }
    }
  }

  let m = isInfected.length;
  let n = isInfected[0].length;
  let ans = 0;

  while (1) {
    let vis = [];
    for (let i = 0; i < m; i++) {
      vis.push([]);
      for (let j = 0; j < n; j++) {
        vis[i].push(false);
      }
    }

    let areas = [];
    let c = [];
    let boundaries = [];

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (isInfected[i][j] == 1 && !vis[i][j]) {
          areas.push(new Set());
          boundaries.push(new Set());
          c.push(0);
          dfs(i, j);
        }
      }
    }

    if (!areas.length) break;

    let idx = boundaries.indexOf(Math.max(...boundaries, len));
    ans += c[idx];

    for (let k = 0; k < areas.length; k