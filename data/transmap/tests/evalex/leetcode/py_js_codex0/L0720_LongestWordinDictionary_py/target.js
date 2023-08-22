function f_gold(words) {
    var cnt = 0;
    var ans = '';
    var s = new Set(words);
    for (var w of s) {
        var n = w.length;
        if (all(w.slice(0, i) in s for (var i = 1; i < n; i++))) {
            if (cnt < n) {
                cnt = n;
                ans = w;
            }
            else if (cnt == n && w < ans) {
                ans = w;
            }
        }
    }
    return ans;
}

