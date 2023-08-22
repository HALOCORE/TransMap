
function f_gold(intervals) {
    intervals.sort(function (x, y) {
        return x[1] - y[1];
    });
    var ans = 0;
    var t = intervals[0][1];
    for (var i = 1; i < intervals.length; i++) {
        var s = intervals[i][0];
        var e = intervals[i][1];
        if (s >= t) {
            t = e;
        } else {
            ans++;
        }
    }
    return ans;
}

