
function f_gold (m, n, positions) {
    var p = list(range(m * n));
    var grid = [[0] * n for _ in range(m)];
    function check(i, j) {
        return 0 <= i < m and 0 <= j < n and grid[i][j] == 1;
    }
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var res = [];
    var cur = 0;
    for (var i, j in positions) {
        if (grid[i][j] == 1) {
            res.append(cur);
            continue;
        }
        grid[i][j] = 1;
        cur += 1;
        for (var x, y in [(-1, 0), (1, 0), (0, -1), (0, 1)]) {
            if (check(i + x, j + y) and find(i * n + j) != find((i + x) * n + j + y)) {
                p[find(i * n + j)] = find((i + x) * n + j + y);
                cur -= 1;
            }
        }
        res.append(cur);
    }
    return res;
}

