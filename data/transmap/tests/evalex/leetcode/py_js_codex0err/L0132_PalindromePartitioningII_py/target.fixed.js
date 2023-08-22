function f_gold(s) {
    let n = s.length;
    let dp1 = new Array(n);
    for (let i = 0; i < n; i++) {
        dp1[i] = new Array(n).fill(false);
    }
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            dp1[i][j] = s[i] == s[j] && (j - 1 < 3 || dp1[i + 1][j - 1]);
        }
    }
    let dp2 = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (!dp1[0][i]) {
            dp2[i] = i;
            for (let j = 1; j <= i; j++) {
                if (dp1[j][i]) {
                    dp2[i] = Math.min(dp2[i], dp2[j - 1] + 1);
                }
            }
        }
    }
    return dp2[n - 1];
}

