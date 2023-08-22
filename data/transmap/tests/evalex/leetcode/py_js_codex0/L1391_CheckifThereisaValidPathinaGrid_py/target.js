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
    function left(i, j) {
        if (j > 0 && grid[i][j - 1] in (1, 4, 6)) {
            p[find(i * n + j)] = find(i * n + j - 1);
        }
    }
    function right(i, j) {
        if (j < n - 1 && grid[i][j + 1] in (1, 3, 5)) {
            p[find(i * n + j)] = find(i * n + j + 1);
        }
    }
    function up(i, j) {
        if (i > 0 && grid[i - 1][j] in (2, 3, 4)) {
            p[find(i * n + j)] = find((i - 1) * n + j);
        }
    }
    function down(i, j) {
        if (i < m - 1 && grid[i + 1][j] in (2, 5, 6)) {
            p[find(i * n + j)] = find((i + 1) * n + j);
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var e = grid[i][j];
            if (e == 1) {
                left(i, j);
                right(i, j);
            }
            else if (e == 2) {
                up(i, j);
                down(i, j);
            }
            else if (e == 3) {
                left(i, j);
                down(i, j);
            }
            else if (e == 4) {
                right(i, j);
                down(i, j);
            }