
function f_gold(points) {
    function gcd(a, b) {
        return (b == 0) ? a : gcd(b, a % b);
    }
    var n = points.length;
    if (n < 3) {
        return n;
    }
    var res = 0;
    for (var i = 0; i < n - 1; i++) {
        var counter = {};
        var t_max = 0;
        var duplicate = 0;
        for (var j = i + 1; j < n; j++) {
            var delta_x = points[i][0] - points[j][0];
            var delta_y = points[i][1] - points[j][1];
            if (delta_x == 0 && delta_y == 0) {
                duplicate += 1;
                continue;
            }
            var g = gcd(delta_x, delta_y);
            var d_x = delta_x / g;
            var d_y = delta_y / g;
            var key = d_x + "." + d_y;
            if (counter[key] == undefined) {
                counter[key] = 1;
            } else {
                counter[key] += 1;
            }
            t_max = Math.max(t_max, counter[key]);
        }
        res = Math.max(res, t_max + duplicate + 1);
    }
    return res;
}

