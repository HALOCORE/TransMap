function f_gold(strs) {
    function check(a, b) {
        var i = 0;
        var j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] == b[j]) {
                j++;
            }
            i++;
        }
        return j == b.length;
    }
    var n = strs.length;
    var ans = -1;
    for (var i = 0; i < n; i++) {
        var j = 0;
        while (j < n) {
            if (i == j || !check(strs[j], strs[i])) {
                j++;
            }
            else {
                break;
            }
        }
        if (j == n) {
            ans = Math.max(ans, strs[i].length);
        }
    }
    return ans;
}

