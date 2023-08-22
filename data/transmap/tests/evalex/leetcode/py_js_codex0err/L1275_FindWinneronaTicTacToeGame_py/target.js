
function f_gold(moves) {
    let n = moves.length;
    let counter = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = n - 1; i >= 0; i -= 2) {
        let row = moves[i][0];
        let col = moves[i][1];
        counter[row] += 1;
        counter[col + 3] += 1;
        if (row == col) counter[6] += 1;
        if (row + col == 2) counter[7] += 1;
        if (
            counter[row] == 3 ||
            counter[col + 3] == 3 ||
            counter[6] == 3 ||
            counter[7] == 3
        )
            return "A" if (i % 2) == 0 else "B";
    }
    return n == 9 ? "Draw" : "Pending";
}

