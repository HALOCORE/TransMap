function f_gold(text, pattern) {
    var ans = 0;
    var cnt = {};
    for (var c of text) {
        if (c == pattern[1]) {
            ans += cnt[pattern[0]];
        }
        cnt[c] = (cnt[c] || 0) + 1;
    }
    ans += Math.max(cnt[pattern[0]], cnt[pattern[1]]);
    return ans;
}

