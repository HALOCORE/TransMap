function f_gold(board) {
    var x = 0;
    var y = 0;
    var n = 8;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (board[i][j] == 'R') {
                x = i;
                y = j;
                break;
            }
        }
    }
    var ans = 0;
    for (var a = 0; a < 2; a++) {
        for (var b = 0; b < 2; b++) {
            var i = x;
            var j = y;
            while (0 <= i + a && i + a < n && 0 <= j + b && j + b < n && board[i + a][j + b] != 'B') {
                i = i + a;
                j = j + b;
                if (board[i][j] == 'p') {
                    ans += 1;
                    break;
                }
            }
        }
    }
    return ans;
}

