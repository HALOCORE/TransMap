
function f_gold(n) {
    var dp = new Array(10).fill(new Array(10).fill(-1));
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
        var up = limit ? digit[pos] : 9;
        var ans = 0;
        for (var i = 0; i < up + 1; i++) {
            var nxt = i == 1 ? cnt + 1 : cnt;
            ans += dfs(pos - 1, nxt, limit && i == digit[pos]);
        }
        if (!limit) {
            dp[pos][cnt] = ans;
        }
        return ans;
    }
    return dfs(digit.length - 1, 0, true);
}

