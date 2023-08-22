function f_gold(word) {
    function dfs(s, t) {
        if (!s) {
            ans.push(t.join(''));
            return;
        }
        for (let i = 1; i < s.length + 1; i++) {
            t.push(i.toString());
            if (i < s.length) {
                t.push(s[i]);
                dfs(s.slice(i + 1), t);
                t.pop();
            }
            else {
                dfs(s.slice(i), t);
            }
            t.pop();
        }
        t.push(s[0]);
        dfs(s.slice(1), t);
        t.pop();
    }
    let ans = [];
    dfs(word, []);
    return ans;
}

