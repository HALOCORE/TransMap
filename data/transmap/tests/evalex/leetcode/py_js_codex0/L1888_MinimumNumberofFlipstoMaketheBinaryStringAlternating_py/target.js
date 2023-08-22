function f_gold(s) {
    let n = s.length;
    let target = '01';
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        cnt += s[i] != target[i & 1];
    }
    let res = Math.min(cnt, n - cnt);
    for (let i = 0; i < n; i++) {
        cnt -= s[i] != target[i & 1];
        cnt += s[i] != target[(i + n) & 1];
        res = Math.min(res, cnt, n - cnt);
    }
    return res;
}

