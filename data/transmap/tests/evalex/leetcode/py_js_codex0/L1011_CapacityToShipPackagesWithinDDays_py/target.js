
function f_gold(weights, D) {
    function check(capacity) {
        var cnt = 1;
        var t = 0;
        for (var w of weights) {
            if (w > capacity) {
                return false;
            }
            if (t + w <= capacity) {
                t += w;
            }
            else {
                cnt += 1;
                t = w;
            }
        }
        return cnt <= D;
    }
    var left = 1;
    var right = 25000000;
    while (left < right) {
        var mid = (left + right) >> 1;
        if (check(mid)) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

