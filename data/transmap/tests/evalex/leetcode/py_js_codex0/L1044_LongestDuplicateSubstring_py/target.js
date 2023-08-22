function f_gold(s) {
    function check(l) {
        var vis = new Set();
        for (var i = 0; i < n - l + 1; i++) {
            var t = s.substring(i, i + l);
            if (vis.has(t)) {
                return t;
            }
            vis.add(t);
        }
        return '';
    }
    var n = s.length;
    var left = 0;
    var right = n;
    var ans = '';
    while (left < right) {
        var mid = (left + right + 1) >> 1;
        var t = check(mid);
        ans = t || ans;
        if (t) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return ans;
}

