function f_gold(s) {
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        cnt += s[i] == '01'[i & 1];
    }
    return Math.min(cnt, s.length - cnt);
}

