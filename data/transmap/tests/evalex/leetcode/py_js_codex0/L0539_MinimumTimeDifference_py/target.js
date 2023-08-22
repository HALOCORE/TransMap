function f_gold(timePoints) {
    if (timePoints.length > 24 * 60) {
        return 0;
    }
    var mins = timePoints.map(function (t) { return parseInt(t.substring(0, 2)) * 60 + parseInt(t.substring(3, 5)); }).sort(function (a, b) { return a - b; });
    mins.push(mins[0] + 24 * 60);
    var res = mins[mins.length - 1];
    for (var i = 1; i < mins.length; i++) {
        res = Math.min(res, mins[i] - mins[i - 1]);
    }
    return res;
}

