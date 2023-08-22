
function f_gold(board, rMove, cMove, color) {
    var dirs = [[1, 0], [0, 1], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    var n = 8;
    for (var i = 0; i < dirs.length; i++) {
        var a = dirs[i][0];
        var b = dirs[i][1];
        var i = rMove;
        var j = cMove;
        var t = 0;
        while (0 <= i + a && i + a < n && 0 <= j + b && j + b < n) {
            t += 1;
            i = i + a;
            j = j + b;
            if (board[i][j] == '.' || board[i][j] == color) break;
        }
        if (board[i][j] == color && t > 1) return true;
    }
    return false;
}

