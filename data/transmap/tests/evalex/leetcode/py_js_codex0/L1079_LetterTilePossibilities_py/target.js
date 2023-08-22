function f_gold(tiles) {
    function dfs() {
        var ans = 0;
        for (var i = 0; i < 26; i++) {
            if (cnt[i]) {
                ans += 1;
                cnt[i] -= 1;
                ans += dfs();
                cnt[i] += 1;
            }
        }
        return ans;
    }
    var cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var t = 0; t < tiles.length; t++) {
        cnt[tiles.charCodeAt(t) - 65] += 1;
    }
    return dfs();
}

