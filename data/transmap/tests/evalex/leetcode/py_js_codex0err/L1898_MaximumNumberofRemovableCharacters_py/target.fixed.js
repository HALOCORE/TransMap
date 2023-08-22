function f_gold(s, p, removable) {
    function check(k) {
        var i = 0, j = 0;
        var ids = new Set(removable.slice(0, k));
        while (i < m && j < n) {
            if (!ids.has(i) && s[i] == p[j]) {
                j++;
            }
            i++;
        }
        return j == n;
    }
    var m = s.length, n = p.length;
    var left = 0, right = removable.length;
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

