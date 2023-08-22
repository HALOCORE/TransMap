function f_gold(s) {
    function check(i, j) {
        var v = new Set();
        for (var k = 0; k < 10; k++) {
            var cnt = presum[j + 1][k] - presum[i][k];
            if (cnt > 0) {
                v.add(cnt);
            }
            if (v.size > 1) {
                return false;
            }
        }
        return true;
    }
    var n = s.length;
    var presum = new Array(n + 1);
    for (var i = 0; i < n + 1; i++) {
        presum[i] = new Array(10);
        for (var j = 0; j < 10; j++) {
            presum[i][j] = 0;
        }
    }
    for (var i = 0; i < n; i++) {
        presum[i + 1][parseInt(s[i])] += 1;
        for (var j = 0; j < 10; j++) {
            presum[i + 1][j] += presum[i][j];
        }
    }
    var vis = new Set();
    for (var i = 0; i < n; i++) {
        for (var j = i; j < n; j++) {
            if (check(i, j)) {
                vis.add(s.substring(i, j + 1));
            }
        }
    }
    return vis.size;
}

