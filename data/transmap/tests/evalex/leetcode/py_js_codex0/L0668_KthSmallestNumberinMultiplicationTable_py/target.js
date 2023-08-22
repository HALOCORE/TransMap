function f_gold(m, n, k) {
    var left = 1;
    var right = m * n;
    while (left < right) {
        var mid = (left + right) >> 1;
        var cnt = 0;
        for (var i = 1; i <= m; i++) {
            cnt += Math.min(mid / i, n);
        }
        if (cnt >= k) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

