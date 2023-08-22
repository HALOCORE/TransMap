
function f_gold(cardPoints, k) {
    let n = cardPoints.length;
    let s = Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        s[i + 1] = s[i] + cardPoints[i];
    }
    let mi = Number.MAX_VALUE;
    for (let i = 0; i < n; i++) {
        let j = i + (n - k) - 1;
        if (j < n) {
            mi = Math.min(mi, s[j + 1] - s[i]);
        }
    }
    return s[s.length - 1] - mi;
}

