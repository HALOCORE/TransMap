function f_gold(s) {
    var ans = t = 0;
    for (var i = 0; i < s.length; i++) {
        if (i == 0 || s[i] == s[i - 1]) {
            t += 1;
        }
        else {
            t = 1;
        }
        ans = Math.max(ans, t);
    }
    return ans;
}

