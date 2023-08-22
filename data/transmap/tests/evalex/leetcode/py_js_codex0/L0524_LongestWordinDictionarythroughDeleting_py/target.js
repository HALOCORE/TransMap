function f_gold(s, dictionary) {
    function check(a, b) {
        var m = a.length;
        var n = b.length;
        var i = 0;
        var j = 0;
        while (i < m && j < n) {
            if (a[i] == b[j]) {
                j += 1;
            }
            i += 1;
        }
        return j == n;
    }
    var ans = '';
    for (var a of dictionary) {
        if (check(s, a) && (ans.length < a.length || (ans.length == a.length && ans > a))) {
            ans = a;
        }
    }
    return ans;
}

