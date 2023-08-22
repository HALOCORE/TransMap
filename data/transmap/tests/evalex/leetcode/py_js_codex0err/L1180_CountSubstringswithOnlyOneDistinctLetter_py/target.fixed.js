function f_gold(s) {
    var n = s.length;
    var i = 0, ans = 0;
    while (i < n) {
        var j = i;
        while (j < n && s[j] == s[i]) {
            j += 1;
        }
        ans += Math.floor((1 + j - i) * (j - i) / 2);
        i = j;
    }
    return ans;
}

