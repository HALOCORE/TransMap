function f_gold(s) {
    let n = s.length;
    let left = new Array(n + 1);
    let right = new Array(n + 1);
    let ans = 0x3F3F3F3F;
    for (let i = 1; i < n + 1; i++) {
        left[i] = left[i - 1] + (1 if s[i - 1] == '1' else 0);
    }
    for (let i = n - 1; i > -1; i--) {
        right[i] = right[i + 1] + (1 if s[i] == '0' else 0);
    }
    for (let i = 0; i < n + 1; i++) {
        ans = Math.min(ans, left[i] + right[i]);
    }
    return ans;
}

