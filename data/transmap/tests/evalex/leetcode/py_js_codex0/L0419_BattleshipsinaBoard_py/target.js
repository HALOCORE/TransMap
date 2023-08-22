
function f_gold(board) {
    var m = board.length;
    var n = board[0].length;
    var ans = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] == '.') continue;
            if (i > 0 && board[i - 1][j] == 'X') continue;
            if (j > 0 && board[i][j - 1] == 'X') continue;
            ans++;
        }
    }
    return ans;
}

