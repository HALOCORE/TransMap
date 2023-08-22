function f_gold(points) {
    var x1 = points[0][0];
    var y1 = points[0][1];
    var x2 = points[1][0];
    var y2 = points[1][1];
    var x3 = points[2][0];
    var y3 = points[2][1];
    return (y2 - y1) * (x3 - x2) != (y3 - y2) * (x2 - x1);
}

