
function f_gold(n) {
    var dp = [[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]];
    var digit = [];
    while (n) {
        digit.push(n % 10);
        n = Math.floor(n / 10);
    }
    function dfs(pos, cnt, limit) {
        if (pos == -1) {
            return cnt;
        }
        if (!limit && dp[pos][cnt] != -1) {
            return dp[pos][cnt];
        }
        var up = digit[pos] if limit else 9;
        var ans = 0;
        for (var i = 0; i < up + 1; i++) {
            var nxt = cnt + 1 if i == 1 else cnt;
            ans += dfs(pos - 1, nxt, limit && i == digit[pos]);
        }
        if (!limit) {
            dp[pos][cnt] = ans;
        }
        return ans;
    }
    return dfs(digit.length - 1, 0, true);
}

