function f_gold(points) {
    var min_x = Number.POSITIVE_INFINITY;
    var max_x = Number.NEGATIVE_INFINITY;
    var point_set = new Set();
    for (var i = 0; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][1];
        min_x = Math.min(min_x, x);
        max_x = Math.max(max_x, x);
        point_set.add(String([x, y]));
    }
    var s = min_x + max_x;
    for (var i = 0; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][1];
        if (!point_set.has(String([s - x, y]))) {
            return false;
        }
    }
    return true;
}

