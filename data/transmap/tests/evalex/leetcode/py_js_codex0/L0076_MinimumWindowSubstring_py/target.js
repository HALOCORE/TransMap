function f_gold(s, t) {
    var ans = '';
    var m = s.length;
    var n = t.length;
    if (m < n) {
        return ans;
    }
    var need = new Map();
    var window = new Map();
    var i = 0;
    var cnt = 0;
    var mi = Number.MAX_VALUE;
    for (var j = 0; j < m; j++) {
        var c = s.charAt(j);
        if (window.has(c)) {
            window.set(c, window.get(c) + 1);
        }
        else {
            window.set(c, 1);
        }
        if (need.has(c) && need.get(c) >= window.get(c)) {
            cnt++;
        }
        while (cnt == n) {
            if (j - i + 1 < mi) {
                mi = j - i + 1;
                ans = s.substring(i, j + 1);
            }
            c = s.charAt(i);
            if (need.has(c) && need.get(c) >= window.get(c)) {
                cnt--;
            }
            window.set(c, window.get(c) - 1);
            i++;
        }
    }
    return ans;
}

