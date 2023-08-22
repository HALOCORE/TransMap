function f_gold (time) {
    function check (t) {
        var h = parseInt(t.substring(0, 2));
        var m = parseInt(t.substring(2, 4));
        return 0 <= h && h < 24 && 0 <= m && m < 60;
    }
    function dfs (curr) {
        if (curr.length == 4) {
            if (!check(curr)) {
                return;
            }
            var p = parseInt(curr.substring(0, 2)) * 60 + parseInt(curr.substring(2, 4));
            if (t < p && p < t + d) {
                d = p - t;
                ans = curr.substring(0, 2) + ':' + curr.substring(2, 4);
                return;
            }
        }
        for (var i = 0; i < s.length; i++) {
            dfs(curr + s[i]);
        }
    }
    var s = [];
    for (var i = 0; i < time.length; i++) {
        if (time[i] != ':') {
            s.push(time[i]);
        }
    }
    var t = parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3, 5));
    var d = Number.MAX_VALUE;
    var ans = null;
    dfs('');
    if (ans == null) {
        var mi = Number.MAX_VALUE;
        for (var i = 0; i < s.length; i++) {
            mi = Math.min(mi, parseInt(s[i]));
        }
        ans = mi + '' + mi + ':' + mi + '' + mi;
    }
    return ans;
}

