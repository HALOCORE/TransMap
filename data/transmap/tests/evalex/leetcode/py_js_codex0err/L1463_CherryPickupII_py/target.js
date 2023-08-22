
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var dp = new Array(m);
    for (var i = 0; i < m; i++) {
        dp[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            dp[i][j] = new Array(n);
            for (var k = 0; k < n; k++) {
                dp[i][j][k] = 0;
            }
        }
    }
    var valid = new Array(m);
    for (var i = 0; i < m; i++) {
        valid[i] = new Array(n);
        for (var j = 0; j < n; j++) {
            valid[i][j] = new Array(n);
            for (var k = 0; k < n; k++) {
                valid[i][j][k] = false;
            }
        }
    }
    dp[0][0][n - 1] = grid[0][0] + grid[0][n - 1];
    valid[0][0][n - 1] = true;
    for (var i = 1; i < m; i++) {
        for (var j1 = 0; j1 < n; j1++) {
            for (var j2 = 0; j2 < n; j2++) {
                var t = grid[i][j1];
                if (j1 != j2) {
                    t += grid[i][j2];
                }
                var ok = false;
                for (var y1 = j1 - 1; y1 < j1 + 2; y1++) {
                    for (var y2 = j2 - 1; y2 < j2 + 2; y2++) {
                        if (0 <= y1 && y1 < n && 0 <= y2 && y2 < n && valid[i - 1][y1][y2]) {
                            dp[i][j1][j2] = Math.max(dp[i][j1][j2], dp[i - 1][y