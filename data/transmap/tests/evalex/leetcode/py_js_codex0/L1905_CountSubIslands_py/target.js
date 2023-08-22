function f_gold(grid1, grid2) {
    function dfs(i, j) {
        var ans = grid1[i][j] == 1;
        grid2[i][j] = 0;
        for (var a = 0; a < 4; a++) {
            var x = i + [0, 0, -1, 1][a];
            var y = j + [-1, 1, 0, 0][a];
            if (0 <= x && x < m && 0 <= y && y < n && grid2[x][y] == 1 && !dfs(x, y)) {
                ans = false;
            }
        }
        return ans;
    }
    var m = grid1.length;
    var n = grid1[0].length;
    var sum = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid2[i][j] == 1 && dfs(i, j)) {
                sum++;
            }
        }
    }
    return sum;
}

