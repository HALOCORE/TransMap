function f_gold(s, wordDict) {
    var words = new Set(wordDict);
    var n = s.length;
    var dp = new Array(n + 1).fill(false);
    dp[0] = true;
    for (var i = 1; i < n + 1; i++) {
        for (var j = 0; j < i; j++) {
            if (dp[j] && words.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

