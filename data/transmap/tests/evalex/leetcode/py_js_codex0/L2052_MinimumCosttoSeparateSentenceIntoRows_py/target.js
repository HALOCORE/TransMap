
function f_gold(sentence, k) {
    function dfs(i) {
        if (s[s.length - 1] - s[i] + n - i - 1 <= k) {
            return 0;
        }
        var ans = Number.POSITIVE_INFINITY;
        var j = i + 1;
        while (j < n && (t = s[j] - s[i] + j - i - 1) <= k) {
            ans = Math.min(ans, Math.pow(k - t, 2) + dfs(j));
            j += 1;
        }
        return ans;
    }
    var t = sentence.split(" ").map(function (w) { return w.length; });
    var n = t.length;
    var s = [0].concat(t).reduce(function (a, b) { return a + b; });
    return dfs(0);
}

