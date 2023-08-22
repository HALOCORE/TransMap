function f_gold(intervals) {
    intervals.sort(function (x, y) { return x[0] - y[0]; });
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }
    return true;
}

