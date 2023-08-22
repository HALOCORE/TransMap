function f_gold(board) {
    let row = [[false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9];
    let col = [[false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9];
    let sub = [[false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9, [false] * 9];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let c = board[i][j];
            if (c == '.') {
                continue;
            }
            let num = parseInt(c) - 1;
            let k = parseInt(i / 3) * 3 + parseInt(j / 3);
            if (row[i][num] || col[j][num] || sub[k][num]) {
                return false;
            }
            row[i][num] = true;
            col[j][num] = true;
            sub[k][num] = true;
        }
    }
    return true;
}

