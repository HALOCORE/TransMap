function f_gold(s, k) {
    let n = s.length;
    let ans = s.split("0").length - 1;
    let v = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] == '1') {
            if (v + (1 << (n - i - 1)) > k) break;
            ans++;
            v += 1 << (n - i - 1);
        }
    }
    return ans;
}

