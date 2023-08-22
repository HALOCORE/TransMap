function f_gold(s) {
    function dfs(i, t, lcnt, rcnt, ldel, rdel) {
        if (ldel * rdel < 0 || lcnt < rcnt || ldel + rdel > s.length - i) {
            return;
        }
        if (ldel == 0 && rdel == 0) {
            if (s.length - t.length == tdel) {
                ans.add(t);
            }
        }
        if (i == s.length) {
            return;
        }
        if (s[i] == '(') {
            dfs(i + 1, t, lcnt, rcnt, ldel - 1, rdel);
            dfs(i + 1, t + '(', lcnt + 1, rcnt, ldel, rdel);
        }
        else if (s[i] == ')') {
            dfs(i + 1, t, lcnt, rcnt, ldel, rdel - 1);
            dfs(i + 1, t + ')', lcnt, rcnt + 1, ldel, rdel);
        }
        else {
            dfs(i + 1, t + s[i], lcnt, rcnt, ldel, rdel);
        }
    }
    let ldel = 0, rdel = 0;
    for (let c of s) {
        if (c == '(') {
            ldel += 1;
        }
        else if (c == ')') {
            if (ldel == 0) {
                rdel += 1;
            }
            else {
                ldel -= 1;
            }
        }
    }
    let tdel = ldel + rdel;
    let ans = new Set();
    dfs(0, '', 0, 0, ldel, rdel);
    return Array.from(ans);
}

