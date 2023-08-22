function f_gold(s) {
    function dfs(i, t) {
        if (i == t.length) {
            ans.push(t.join(''));
            return;
        }
        dfs(i + 1, t);
        if (t[i].match(/[a-z]/i)) {
            t[i] = t[i].isupper() ? t[i].lower() : t[i].upper();
            dfs(i + 1, t);
        }
    }
    var ans = [];
    var t = s.split('');
    dfs(0, t);
    return ans;
}

