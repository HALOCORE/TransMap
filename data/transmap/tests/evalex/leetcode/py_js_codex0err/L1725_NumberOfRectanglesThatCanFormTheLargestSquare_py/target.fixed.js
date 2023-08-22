function f_gold(rectangles) {
    var ans, mx = 0;
    for (var i = 0; i < rectangles.length; i++) {
        var l = rectangles[i][0];
        var w = rectangles[i][1];
        var t = Math.min(l, w);
        if (mx < t) {
            mx = t;
            ans = 1;
        }
        else if (mx == t) {
            ans += 1;
        }
    }
    return ans;
}

