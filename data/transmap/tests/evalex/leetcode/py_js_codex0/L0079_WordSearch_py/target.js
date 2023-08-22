
function f_gold(board, word) {
    function dfs(i, j, cur) {
        if (cur == word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] == '0' || word[cur] != board[i][j]) {
            return false;
        }
        var t = board[i][j];
        board[i][j] = '0';
        for (var a = 0; a < 2; a++) {
            for (var b = -1; b < 2; b++) {
                if (a == 0 && b == 0) {
                    continue;
                }
                var x = i + a;
                var y = j + b;
                if (dfs(x, y, cur + 1)) {
                    return true;
                }
            }
        }
        board[i][j] = t;
        return false;
    }
    var m = board.length;
    var n = board[0].length;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

