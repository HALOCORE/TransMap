
function f_gold(grid) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var n = grid.length;
    var p = Array.from(Array(n * n).keys());
    var hi = Array(n * n).fill(0);
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            hi[grid[i][j]] = i * n + j;
        }
    }
    for (var t = 0; t < n * n; t++) {
        var i = Math.floor(hi[t] / n);
        var j = hi[t] % n;
        if (true) {
            for (var [a, b] of [[0, -1], [0, 1], [1, 0], [-1, 0]]) {
                if (a == 0 && b == 0) {
                    continue;
                }
                var x = i + a;
                var y = j + b;
                if (0 <= x && x < n && 0 <= y && y < n && grid[x][y] <= t) {
                    p[find(x * n + y)] = find(hi[t]);
                }
                if (find(0) == find(n * n - 1)) {
                    return t;
                }
            }
        }
    }
    return -1;
}

