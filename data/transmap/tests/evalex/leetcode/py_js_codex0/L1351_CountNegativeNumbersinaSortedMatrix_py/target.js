function f_gold(grid) {
    var m, n;
    m = grid.length;
    n = grid[0].length;
    var i, j;
    i = m - 1;
    j = 0;
    var ans = 0;
    while (i >= 0 && j < n) {
        if (grid[i][j] < 0) {
            ans += n - j;
            i -= 1;
        }
        else {
            j += 1;
        }
    }
    return ans;
}

