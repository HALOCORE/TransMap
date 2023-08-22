function f_gold(rows, cols, rStart, cStart) {
    var ans = [[rStart, cStart]];
    if (rows * cols == 1) {
        return ans;
    }
    var k = 1;
    while (true) {
        for (var [dr, dc, dk] of [[0, 1, k], [1, 0, k], [0, -1, k + 1], [-1, 0, k + 1]]) {
            for (var _ = 0; _ < dk; _++) {
                rStart += dr;
                cStart += dc;
                if (0 <= rStart && rStart < rows && 0 <= cStart && cStart < cols) {
                    ans.push([rStart, cStart]);
                    if (ans.length == rows * cols) {
                        return ans;
                    }
                }
            }
        }
        k += 2;
    }
}

