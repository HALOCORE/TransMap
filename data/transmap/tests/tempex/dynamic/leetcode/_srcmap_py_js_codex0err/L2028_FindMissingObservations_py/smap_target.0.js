
function f_gold(rolls, mean, n) {
    let m = rolls.length;
    let s = (n + m) * mean - rolls.reduce((a, b) => a + b);
    if (s > n * 6 || s < n) return [];
    let ans = Array(n).fill(s / n);
    for (let i = 0; i < s % n; i++) ans[i] += 1;
    return ans;
}

