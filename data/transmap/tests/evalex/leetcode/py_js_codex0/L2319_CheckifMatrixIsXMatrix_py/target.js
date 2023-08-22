function f_gold(grid) {
    var n = grid.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i == j || i == n - j - 1) {
                if (grid[i][j] == 0) {
                    return false;
                }
            }
            else if (grid[i][j]) {
                return false;
            }
        }
    }
    return true;
}

