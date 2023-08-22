
function f_gold(s1, s2) {
    function next(s) {
        var i = 0;
        var res = [];
        while (s[i] == s2[i]) {
            i += 1;
        }
        for (var j = i + 1; j < n; j++) {
            if (s[j] == s2[i] && s[j] != s2[j]) {
                res.push(s.substring(0, i) + s[j] + s.substring(i + 1, j) + s[i] + s.substring(j + 1));
            }
        }
        return res;
    }
    var q = [s1];
    var vis = new Set([s1]);
    var ans = 0;
    var n = s1.length;
    while (q.length > 0) {
        for (var _ = 0; _ < q.length; _++) {
            var s = q.shift();
            if (s == s2) {
                return ans;
            }
            for (var _i = 0, _a = next(s); _i < _a.length; _i++) {
                var nxt = _a[_i];
                if (!vis.has(nxt)) {
                    vis.add(nxt);
                    q.push(nxt);
                }
            }
        }
        ans += 1;
    }
    return -1;
}

