function f_gold(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    var a = (ax2 - ax1) * (ay2 - ay1);
    var b = (bx2 - bx1) * (by2 - by1);
    var width = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    var height = Math.min(ay2, by2) - Math.max(ay1, by1);
    return a + b - Math.max(height, 0) * Math.max(width, 0);
}

