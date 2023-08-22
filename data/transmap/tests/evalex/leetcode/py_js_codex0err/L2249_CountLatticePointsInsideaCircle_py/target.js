function f_gold(circles) {
    var ans = 0;
    var imx = Math.max(x + r for (x, _, r) in circles);
    var jmx = Math.max(y + r for (_, y, r) in circles);
    for (var i = 0; i <= imx; i++) {
        for (var j = 0; j <= jmx; j++) {
            for (var x, y, r in circles) {
                x, y = x - i, y - j;
                if (x * x + y * y <= r * r) {
                    ans += 1;
                    break;
                }
            }
        }
    }
    return ans;
}

