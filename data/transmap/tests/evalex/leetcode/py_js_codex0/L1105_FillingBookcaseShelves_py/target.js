function f_gold(books, shelfWidth) {
    let n = books.length;
    let dp = Array(n + 1).fill(0);
    dp[1] = books[0][1];
    for (let i = 2; i < n + 1; i++) {
        dp[i] = books[i - 1][1] + dp[i - 1];
        let w = books[i - 1][0];
        let h = books[i - 1][1];
        for (let j = i - 1; j > 0; j--) {
            w += books[j - 1][0];
            if (w > shelfWidth) {
                break;
            }
            h = Math.max(books[j - 1][1], h);
            dp[i] = Math.min(dp[i], dp[j - 1] + h);
        }
    }
    return dp[n];
}

