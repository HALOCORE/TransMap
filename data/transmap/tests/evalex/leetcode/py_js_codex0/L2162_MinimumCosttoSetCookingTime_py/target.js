
function f_gold(startAt, moveCost, pushCost, targetSeconds) {
    function f(m, s) {
        if (!(0 <= m < 100) || !(0 <= s < 100)) {
            return inf;
        }
        var arr = [m / 10, m % 10, s / 10, s % 10];
        var i = 0;
        while (i < 4 && arr[i] == 0) {
            i++;
        }
        var t = 0;
        var prev = startAt;
        for (var v of arr[i]) {
            if (v != prev) {
                t += moveCost;
            }
            t += pushCost;
            prev = v;
        }
        return t;
    }
    var m = Math.floor(targetSeconds / 60);
    var s = targetSeconds % 60;
    var ans = Math.min(f(m, s), f(m - 1, s + 60));
    return ans;
}

