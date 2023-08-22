function f_gold(grid) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var m = grid.length;
    var n = grid[0].length;
    var p = Array.from(Array(m * n).keys());
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            for (var [a, b] of [[0, 1], [1, 0]]) {
                var x = i + a;
                var y = j + b;
                if (x < m && y < n && grid[x][y] == grid[i][j]) {
                    if (find(x * n + y) == find(i * n + j)) {
                        return true;
                    }
                    p[find(x * n + y)] = find(i * n + j);
                }
            }
        }
    }
    return false;
}

