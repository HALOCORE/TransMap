function f_gold(s) {
    let n = s.length;
    let left = new Array(n + 1).fill(0);
    let right = new Array(n + 1).fill(0);
    let ans = 0x3F3F3F3F;
    for (let i = 1; i < n + 1; i++) {
        left[i] = left[i - 1] + (s[i - 1] == '1' ? 1 : 0);
    }
    for (let i = n - 1; i > -1; i--) {
        right[i] = right[i + 1] + ((s[i] == '0') ? 1 : 0);
    }
    for (let i = 0; i < n + 1; i++) {
        ans = Math.min(ans, left[i] + right[i]);
    }
    return ans;
}

