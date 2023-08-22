function f_gold(points) {
    var ans = 0;
    for (var p of points) {
        var counter = {};
        for (var q of points) {
            var distance = (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
            if (counter[distance] == undefined) {
                counter[distance] = 1;
            }
            else {
                counter[distance] += 1;
            }
        }
        for (var val in counter) {
            ans += counter[val] * (counter[val] - 1);
        }
    }
    return ans;
}

