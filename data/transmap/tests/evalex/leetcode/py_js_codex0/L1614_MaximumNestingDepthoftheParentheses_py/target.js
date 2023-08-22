function f_gold(s) {
    let n = 0;
    let ans = 0;
    for (let c of s) {
        if (c == '(') {
            n += 1;
            ans = Math.max(ans, n);
        }
        else if (c == ')') {
            n -= 1;
        }
    }
    return ans;
}

