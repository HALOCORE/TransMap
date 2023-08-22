function fizz_buzz(n) {
    let ns = [];
    for (let i = 0; i < n; i++) {
        if (i % 11 == 0 || i % 13 == 0) {
            ns.push(i);
        }
    }
    let s = ns.join('');
    let ans = 0;
    for (let c of s) {
        ans += (c == '7');
    }
    return ans;
}

