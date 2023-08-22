function f_gold(k, n) {
    function dfs(i, s, t) {
        if (i > 9 || s > n || t.length > k) {
            return;
        }
        if (s == n && t.length == k) {
            ans.push(t.slice());
            return;
        }
        i += 1;
        t.push(i);
        dfs(i, s + i, t);
        t.pop();
        dfs(i, s, t);
    }
    var ans = [];
    dfs(0, 0, []);
    return ans;
}

