
function f_gold(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var rowsum = new Array(m + 1);
    for (var _i = 0; _i < m + 1; _i++) {
        rowsum[_i] = new Array(n + 1);
    }
    var colsum = new Array(m + 1);
    for (var _i = 0; _i < m + 1; _i++) {
        colsum[_i] = new Array(n + 1);
    }
    for (var i = 1; i < m + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            rowsum[i][j] = rowsum[i][j - 1] + grid[i - 1][j - 1];
            colsum[i][j] = colsum[i - 1][j] + grid[i - 1][j - 1];
        }
    }
    function check(x1, y1, x2, y2) {
        var val = rowsum[x1 + 1][y2 + 1] - rowsum[x1 + 1][y1];
        for (var i = x1 + 1; i <= x2 + 1; i++) {
            if (rowsum[i + 1][y2 + 1] - rowsum[i + 1][y1] != val) {
                return false;
            }
        }
        for (var j = y1; j <= y2 + 1; j++) {
            if (colsum[x2 + 1][j + 1] - colsum[x1][j + 1] != val) {
                return false;
            }
        }
        var s = 0;
        var i = x1;
        var j = y1;
        while (i <= x2) {
            s += grid[i][j];
            i += 1;
            j += 1;
        }
        if (s != val) {
            return false;
        }
        s = 0;
        i = x1;
        j = y2;
        while (i <= x