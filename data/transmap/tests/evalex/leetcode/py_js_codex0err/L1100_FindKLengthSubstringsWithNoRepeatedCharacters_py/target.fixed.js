function f_gold(s, k) {
    var j = 0;
    var ans = j;
    var mp = {};
    for (var i = 0; i < s.length; i++) {
        var c = s[i];
        if (c in mp) {
            j = Math.max(j, mp[c] + 1);
        }
        mp[c] = i;
        if (i - j + 1 >= k) {
            ans += 1;
        }
    }
    return ans;
}

