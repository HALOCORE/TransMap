function f_gold(intervals) {
    intervals.sort(function (x, y) { return x[0] - y[0] || y[1] - x[1]; });
    var cnt = 1;
    var pre = intervals[0];
    for (var e of intervals.slice(1)) {
        if (pre[1] < e[1]) {
            cnt += 1;
            pre = e;
        }
    }
    return cnt;
}

