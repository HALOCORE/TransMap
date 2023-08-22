function f_gold(timeSeries, duration) {
    var n = timeSeries.length;
    var res = duration;
    for (var i = 0; i < n - 1; i++) {
        res += Math.min(duration, timeSeries[i + 1] - timeSeries[i]);
    }
    return res;
}

