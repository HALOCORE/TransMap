function f_gold(s) {
    function check(s) {
        if (!(0 <= parseInt(s) && parseInt(s) <= 255)) {
            return false;
        }
        if (s[0] == '0' && s.length > 1) {
            return false;
        }
        return true;
    }
    function dfs(s, t) {
        if (t.length == 4) {
            if (!s) {
                ans.push(t.join('.'));
            }
            return;
        }
        for (let i = 1; i < Math.min(4, s.length + 1); i++) {
            if (check(s.substring(0, i))) {
                t.push(s.substring(0, i));
                dfs(s.substring(i), t);
                t.pop();
            }
        }
    }
    let ans = [];
    dfs(s, []);
    return ans;
}

