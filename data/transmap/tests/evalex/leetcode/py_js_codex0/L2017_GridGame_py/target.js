function f_gold(grid) {
    var ans = Number.POSITIVE_INFINITY;
    var s1 = 0;
    var s2 = 0;
    for (var i = 0; i < grid[0].length; i++) {
        s1 += grid[0][i];
    }
    for (var j = 0; j < grid[0].length; j++) {
        s1 -= grid[0][j];
        ans = Math.min(ans, Math.max(s1, s2));
        s2 += grid[1][j];
    }
    return ans;
}

