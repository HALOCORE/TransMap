function f_gold(points) {
    var res = 0;
    var x0 = points[0][0];
    var y0 = points[0][1];
    for (var i = 1; i < points.length; i++) {
        var x1 = points[i][0];
        var y1 = points[i][1];
        res += Math.max(Math.abs(x0 - x1), Math.abs(y0 - y1));
        x0 = x1;
        y0 = y1;
    }
    return res;
}

