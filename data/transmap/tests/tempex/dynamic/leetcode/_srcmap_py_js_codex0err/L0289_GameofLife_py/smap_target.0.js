
function f_gold(board) {
    var m = board.length;
    var n = board[0].length;
    var dirs = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            var cnt = 0;
            for (var a = 0; a < dirs.length; a++) {
                for (var b = 0; b < dirs[a].length; b++) {
                    if (0 <= i + a < m && 0 <= j + b < n && board[i + a][j + b] in (1, 2)) {
                        cnt++;
                    }
                }
            }
            if (board[i][j] == 1 && (cnt < 2 || cnt > 3)) {
                board[i][j] = 2;
            }
            else if (board[i][j] == 0 && (cnt == 3)) {
                board[i][j] = 3;
            }
        }
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            board[i][j] %= 2;
        }
    }
}

