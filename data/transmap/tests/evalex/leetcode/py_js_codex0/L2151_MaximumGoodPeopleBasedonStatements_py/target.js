function f_gold(statements) {
    function check(mask) {
        var cnt = 0;
        for (var i = 0; i < statements.length; i++) {
            if ((mask >> i) & 1) {
                for (var j = 0; j < statements[i].length; j++) {
                    if (statements[i][j] < 2 && ((mask >> j) & 1) != statements[i][j]) {
                        return 0;
                    }
                }
                cnt += 1;
            }
        }
        return cnt;
    }
    return Math.max(...Array.from(Array(1 << statements.length).keys()).map(mask => check(mask)));
}

