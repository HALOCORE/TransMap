function f_gold(queens, king) {
    var n = 8;
    var s = new Set((i, j) => {
        for (var i = 0; i < queens.length; i++) {
            for (var j = 0; j < queens[i].length; j++) {
                return queens[i][j];
            }
        }
    });
    var ans = [];
    for (var a = -1; a <= 1; a++) {
        for (var b = -1; b <= 1; b++) {
            if (a == 0 && b == 0) continue;
            var x = king[0];
            var y = king[1];
            while (0 <= x + a && x + a < n && 0 <= y + b && y + b < n) {
                x = x + a;
                y = y + b;
                if (s.has([x, y])) {
                    ans.push([x, y]);
                    break;
                }
            }
        }
    }
    return ans;
}

