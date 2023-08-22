function f_gold(dist, speed) {
    var n = dist.length;
    var times = [];
    for (var i = 0; i < n; i++) {
        times.push((dist[i] - 1) / speed[i]);
    }
    times.sort();
    for (var i = 0; i < n; i++) {
        if (times[i] < i) {
            return i;
        }
    }
    return n;
}

