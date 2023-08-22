
function f_gold(box) {
    var m = box.length;
    var n = box[0].length;
    var res = new Array(n);
    for (var i = 0; i < n; i++) {
        res[i] = new Array(m);
    }
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            res[j][m - i - 1] = box[i][j];
        }
    }
    for (var j = 0; j < m; j++) {
        var q = [];
        for (var i = n - 1; i >= 0; i--) {
            if (res[i][j] == '*') {
                q = [];
                continue;
            }
            if (res[i][j] == '.') {
                q.push(i);
            }
            else {
                if (q.length == 0) {
                    continue;
                }
                res[q.shift()][j] = '#';
                res[i][j] = '.';
                q.push(i);
            }
        }
    }
    return res;
}

