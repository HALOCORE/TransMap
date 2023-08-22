
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
        for (var _ = 0; _ < q.length; _++) {
            var i = q[0][0];
            var j = q[0][1];
            q.shift();
            for (var a = 0; a < 2; a++) {
                for (var b = 0; b < 2; b++) {
                    var x = i + a;
                    var y = b + j;
                    if (0 <= x < n && 0 <= y < n && grid[x][y] == 0) {
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

