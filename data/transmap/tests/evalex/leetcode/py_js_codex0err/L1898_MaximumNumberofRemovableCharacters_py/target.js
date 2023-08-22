function f_gold(s, p, removable) {
    function check(k) {
        var i = j = 0;
        var ids = new Set(removable.slice(0, k));
        while (i < m && j < n) {
            if (!ids.has(i) && s[i] == p[j]) {
                j++;
            }
            i++;
        }
        return j == n;
    }
    var m, n = s.length, p.length;
    var left, right = 0, removable.length;
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

