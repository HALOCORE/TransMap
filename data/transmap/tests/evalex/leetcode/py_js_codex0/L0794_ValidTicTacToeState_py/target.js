function f_gold(board) {
    function win(p) {
        for (let i = 0; i < 3; i++) {
            if (board[i][0] == board[i][1] == board[i][2] == p) {
                return true;
            }
            if (board[0][i] == board[1][i] == board[2][i] == p) {
                return true;
            }
        }
        if (board[0][0] == board[1][1] == board[2][2] == p) {
            return true;
        }
        return board[0][2] == board[1][1] == board[2][0] == p;
    }
    let x = 0, o = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == 'X') {
                x += 1;
            }
            else if (board[i][j] == 'O') {
                o += 1;
            }
        }
    }
    if (x != o && x - 1 != o) {
        return false;
    }
    if (win('X') && x - 1 != o) {
        return false;
    }
    return !(win('O') && x != o);
}

