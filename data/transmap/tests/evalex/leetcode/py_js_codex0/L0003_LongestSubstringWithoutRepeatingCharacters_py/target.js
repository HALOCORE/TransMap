function f_gold(s) {
    var i = 0;
    var ans = 0;
    var chars = new Set();
    for (var j = 0; j < s.length; j++) {
        var c = s[j];
        while (chars.has(c)) {
            chars.delete(s[i]);
            i++;
        }
        chars.add(c);
        ans = Math.max(ans, j - i + 1);
    }
    return ans;
}

