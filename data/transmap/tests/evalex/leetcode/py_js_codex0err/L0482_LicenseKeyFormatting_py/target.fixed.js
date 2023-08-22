function f_gold(s, k) {
    s = s.replaceAll('-', '').toUpperCase();
    let res = [];
    let cnt = (s.length % k) || k;
    let t = 0;
    for (let i = 0; i < s.length; i++) {
        res.push(s[i]);
        t += 1;
        if (t == cnt) {
            t = 0;
            cnt = k;
            if (i != s.length - 1) {
                res.push('-');
            }
        }
    }
    return res.join('');
}

