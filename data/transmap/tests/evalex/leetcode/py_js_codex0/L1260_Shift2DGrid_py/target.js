function f_gold(grid, k) {
    var m, n;
    m = grid.length;
    n = grid[0].length;
    k %= m * n;
    var t = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            t.push(grid[i][j]);
        }
    }
    t = t.slice(-k).concat(t.slice(0, -k));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            grid[i][j] = t[i * n + j];
        }
    }
    return grid;
}

