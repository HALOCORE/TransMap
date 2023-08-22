function f_gold(circles) {
    var ans = 0;
    var imx = Math.max(...circles.map(x => x[0] + x[2]));
    var jmx = Math.max(...circles.map(x => x[1] + x[2]));
    for (var i = 0; i <= imx; i++) {
        for (var j = 0; j <= jmx; j++) {
            for (var [x, y, r] of circles) {
                [x, y] = [x - i, y - j];
                if (x * x + y * y <= r * r) {
                    ans += 1;
                    break;
                }
            }
        }
    }
    return ans;
}

