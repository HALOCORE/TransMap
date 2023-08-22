function f_gold(points) {
    var ans = 0;
    for (var [x1, y1] of points) {
        for (var [x2, y2] of points) {
            for (var [x3, y3] of points) {
                var [u1, v1] = [x2 - x1, y2 - y1];
                var [u2, v2] = [x3 - x1, y3 - y1];
                var t = Math.abs(u1 * v2 - u2 * v1) / 2;
                ans = Math.max(ans, t);
            }
        }
    }
    return ans;
}

