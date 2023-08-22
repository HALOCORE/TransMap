function f_gold(arr) {
    var d = {};
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (d[arr[i]] == undefined) {
            d[arr[i]] = [];
        }
        d[arr[i]].push(i);
    }
    var ans = Array(n).fill(0);
    for (var v in d) {
        var m = d[v].length;
        var val = 0;
        for (var i = 0; i < m; i++) {
            val += d[v][i];
        }
        val -= d[v][0] * m;
        for (var i = 0; i < m; i++) {
            var delta = 0;
            if (i >= 1) {
                delta = d[v][i] - d[v][i - 1];
            }
            val += i * delta - (m - i) * delta;
            ans[d[v][i]] = val;
        }
    }
    return ans;
}

