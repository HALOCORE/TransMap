function f_gold(rowIndex) {
    var row = Array(rowIndex + 1).fill(1);
    for (var i = 2; i <= rowIndex; i++) {
        for (var j = i - 1; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
}

