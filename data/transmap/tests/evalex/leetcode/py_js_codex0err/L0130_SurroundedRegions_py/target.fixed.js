
function f_gold(board) {
    function dfs(i, j) {
        board[i][j] = '.';
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 2; b++) {
                let x = i + a;
                let y = j + b;
                if (0 <= x && x < m && 0 <= y && y < n && board[x][y] == 'O') {
                    dfs(x, y);
                }
            }
        }
    }
    let m = board.length;
    let n = board[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'O' && (i == 0 || i == m - 1 || j == 0 || j == n - 1)) {
                dfs(i, j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'O') {
                board[i][j] = 'X';
            } else if (board[i][j] == '.') {
                board[i][j] = 'O';
            }
        }
    }
}

