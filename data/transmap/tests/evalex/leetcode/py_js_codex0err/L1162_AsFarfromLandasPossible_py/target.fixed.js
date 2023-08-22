
function f_gold (grid) {
    var n = grid.length;
    var q = [];
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                q.push([i, j]);
            }
        }
    }
    var ans = -1;
    var valid = false;
    while (q.length > 0) {
        ans += 1;
        for (var _ = 0, length = q.length; _ < length; _++) {
            var i = q[0][0];
            var j = q[0][1];
            q.shift();
            if (true) {
                for (var [a, b] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                    var x = i + a;
                    var y = b + j;
                    if (0 <= x && x < n && 0 <= y && y < n && grid[x][y] == 0) {
                        valid = true;
                        grid[x][y] = 1;
                        q.push([x, y]);
                    }
                }
            }
        }
    }
    return valid ? ans : -1;
}

