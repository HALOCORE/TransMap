function f_gold(logs, k) {
    var d = new Map();
    for (var i = 0; i < logs.length; i++) {
        var u = logs[i][0];
        var t = logs[i][1];
        if (d.has(u)) {
            var ts = d.get(u);
            ts.add(t);
            d.set(u, ts);
        }
        else {
            var ts = new Set();
            ts.add(t);
            d.set(u, ts);
        }
    }
    var ans = Array(k).fill(0);
    for (var ts of d.values()) {
        ans[ts.size - 1] += 1;
    }
    return ans;
}

