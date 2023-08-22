function f_gold(columnTitle) {
    var res = 0;
    for (var c of columnTitle) {
        res = res * 26 + (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
    }
    return res;
}

