function f_gold(s, t, maxCost) {
    var n = s.length;
    var presum = [0];
    for (var i = 0; i < n; i++) {
        presum[i + 1] = presum[i] + Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }
    var left = 0;
    var right = n;
    function check(l) {
        var i = 0;
        while (i + l - 1 < n) {
            var j = i + l - 1;
            if (presum[j + 1] - presum[i] <= maxCost) {
                return true;
            }
            i += 1;
        }
        return false;
    }
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        if (check(mid)) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

