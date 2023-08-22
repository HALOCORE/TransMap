
function f_gold(row, col, cells) {
    var n = row * col;
    var p = Array.from(Array(n + 2), function (_, x) {
        return x;
    });
    var grid = Array.from(Array(row), function (_, _) {
        return Array.from(Array(col), function (_, _) {
            return false;
        });
    });
    var top = n,
        bottom = n + 1;

    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }

        return p[x];
    }

    function check(i, j) {
        return 0 <= i < row && 0 <= j < col && grid[i][j];
    }

    for (var k = cells.length - 1; k >= 0; k--) {
        var i = cells[k][0] - 1,
            j = cells[k][1] - 1;
        grid[i][j] = true;

        for (var _i = 0, _arr = [[0, 1], [0, -1], [1, 0], [-1, 0]]; _i < _arr.length; _i++) {
            var _ref = _arr[_i],
                x = _ref[0],
                y = _ref[1];

            if (check(i + x, j + y)) {
                p[find(i * col + j)] = find((i + x) * col + j + y);
            }
        }

        if (i == 0) {
            p[find(i * col + j)] = find(top);
        }

        if (i == row - 1) {
            p[find(i * col + j)] = find(bottom);
        }

        if (find(top) == find(bottom)) {
            return k;
        }
    }

    return 0;
}

