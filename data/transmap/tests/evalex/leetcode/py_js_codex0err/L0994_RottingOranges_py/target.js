
function orangesRotting(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var q = [];
    var cnt = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 2) {
                q.push([i, j]);
            } else if (grid[i][j] == 1) {
                cnt++;
            }
        }
    }
    var ans = 0;
    while (q.length && cnt) {
        ans++;
        for (var _ = 0; _ < q.length; _++) {
            var i = q.shift();
            var j = q.shift();
            for (var a = 0; a < 2; a++) {
                for (var b = 0; b < 2; b++) {
                    var x = i + a;
                    var y = j + b;
                    if (0 <= x < m && 0 <= y < n && grid[x][y] == 1) {
                        cnt--;
                        grid[x][y] = 2;
                        q.push([x, y]);
                    }
                }
            }
        }
    }
    return cnt == 0 ? ans : -1;
}

