function f_gold(matrix) {
    var cnt = {};
    for (var row of matrix) {
        var t = [];
        for (var v of row) {
            if (row[0] == 1) {
                v ^= 1;
            }
            t.push(String(v));
        }
        var s = t.join("");
        if (cnt[s] == undefined) {
            cnt[s] = 1;
        }
        else {
            cnt[s] += 1;
        }
    }
    return Math.max(...Object.values(cnt));
}

