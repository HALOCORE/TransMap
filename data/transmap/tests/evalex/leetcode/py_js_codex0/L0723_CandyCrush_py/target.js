
function f_gold(board) {
    let m = board.length;
    let n = board[0].length;
    let run = true;
    while (run) {
        run = false;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n - 2; j++) {
                if (
                    board[i][j] != 0 &&
                    Math.abs(board[i][j]) == Math.abs(board[i][j + 1]) &&
                    Math.abs(board[i][j]) == Math.abs(board[i][j + 2])
                ) {
                    run = true;
                    board[i][j] = board[i][j + 1] = board[i][j + 2] = -Math.abs(
                        board[i][j]
                    );
                }
            }
        }
        for (let j = 0; j < n; j++) {
            for (let i = 0; i < m - 2; i++) {
                if (
                    board[i][j] != 0 &&
                    Math.abs(board[i][j]) == Math.abs(board[i + 1][j]) &&
                    Math.abs(board[i][j]) == Math.abs(board[i + 2][j])
                ) {
                    run = true;
                    board[i][j] = board[i + 1][j] = board[i + 2][j] = -Math.abs(
                        board[i][j]
                    );
                }
            }
        }
        if (run) {
            for (let j = 0; j < n; j++) {
                let curr = m - 1;
                for (let i = m - 1; i > -1; i--) {
                    if (board[i][j] > 0) {
                        board[curr][j] = board[i][j];
                        curr -= 1;
                    }
                }
                while (curr > -1) {
                    board[curr][j] = 0;
                    curr -= 1;
                }
            }
        }
    }