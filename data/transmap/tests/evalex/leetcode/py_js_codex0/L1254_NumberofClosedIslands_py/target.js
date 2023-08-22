
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var p = Array.from(Array(m * n).keys());
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                continue;
            }
            var idx = i * n + j;
            if (i < m - 1 && grid[i + 1][j] == 0) {
                p[find(idx)] = find((i + 1) * n + j);
            }
            if (j < n - 1 && grid[i][j + 1] == 0) {
                p[find(idx)] = find(i * n + j + 1);
            }
        }
    }
    var s = Array(m * n).fill(0);
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 0) {
                s[find(i * n + j)] = 1;
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var root = find(i * n + j);
            if (!s[root]) {
                continue;
            }
            if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                s[root] = 0;
            }
        }
    }
    return s.reduce((a, b) => a + b);
}

