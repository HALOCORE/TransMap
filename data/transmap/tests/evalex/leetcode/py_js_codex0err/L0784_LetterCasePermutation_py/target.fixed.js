function f_gold(s) {
    function dfs(i, t) {
        if (i == t.length) {
            ans.push(t.join(''));
            return;
        }
        dfs(i + 1, t);
        if (t[i].match(/[a-z]/i)) {
            t[i] = t[i] === t[i].toLowerCase() ? t[i].toUpperCase() : t[i].toLowerCase();
            dfs(i + 1, t);
        }
    }
    var ans = [];
    var t = s.split('');
    dfs(0, t);
    return ans;
}

