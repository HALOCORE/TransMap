
function f_gold(words) {
    function check(w1, w2) {
        if (w2.length - w1.length != 1) {
            return false;
        }
        let i = 0;
        let j = 0;
        let cnt = 0;
        while (i < w1.length && j < w2.length) {
            if (w1[i] != w2[j]) {
                cnt += 1;
            } else {
                i += 1;
            }
            j += 1;
        }
        return cnt < 2 && i == w1.length;
    }
    let n = words.length;
    let dp = new Array(n + 1).fill(1);
    words.sort(function (x, y) {
        return x.length - y.length;
    });
    let res = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (check(words[j], words[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        res = Math.max(res, dp[i]);
    }
    return res;
}

