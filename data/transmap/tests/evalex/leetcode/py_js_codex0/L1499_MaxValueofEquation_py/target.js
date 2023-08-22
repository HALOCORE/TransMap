function f_gold(points, k) {
    var q = [points[0]];
    var ans = Number.NEGATIVE_INFINITY;
    for (var i = 1; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][1];
        while (q.length > 0 && x - q[0][0] > k) {
            q.shift();
        }
        if (q.length > 0) {
            ans = Math.max(ans, x + y + q[0][1] - q[0][0]);
        }
        while (q.length > 0 && y - x > q[q.length - 1][1] - q[q.length - 1][0]) {
            q.pop();
        }
        q.push([x, y]);
    }
    return ans;
}

