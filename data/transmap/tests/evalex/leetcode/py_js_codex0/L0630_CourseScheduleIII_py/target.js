function f_gold(courses) {
    courses.sort(function (x, y) { return x[1] - y[1]; });
    var pq = [];
    var s = 0;
    for (var i = 0; i < courses.length; i++) {
        var d = courses[i][0];
        var e = courses[i][1];
        pq.push(-d);
        s += d;
        if (s > e) {
            s += pq.shift();
        }
    }
    return pq.length;
}

