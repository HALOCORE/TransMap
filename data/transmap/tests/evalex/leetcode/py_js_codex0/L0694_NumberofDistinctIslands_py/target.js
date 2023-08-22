function f_gold(grid) {
    function dfs(i, j, direction, path) {
        grid[i][j] = 0;
        path.push(String(direction));
        var dirs = [-1, 0, 1, 0, -1];
        for (var k = 1; k < 5; k++) {
            var x = i + dirs[k - 1];
            var y = j + dirs[k];
            if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] == 1) {
                dfs(x, y, k, path);
            }
        }
        path.push(String(-direction));
    }
    var paths = new Set();
    var path = [];
    var m = grid.length;
    var n = grid[0].length;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j, 0, path);
                paths.add(path.join(''));
                path.length = 0;
            }
        }
    }
    return paths.size;
}

