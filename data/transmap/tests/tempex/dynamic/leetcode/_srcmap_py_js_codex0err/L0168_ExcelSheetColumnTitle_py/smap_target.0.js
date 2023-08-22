function f_gold(columnNumber) {
    var res = [];
    while (columnNumber) {
        columnNumber -= 1;
        res.push(String.fromCharCode(ord('A') + columnNumber % 26));
        columnNumber = Math.floor(columnNumber / 26);
    }
    return res.reverse().join('');
}

