function f_gold(n) {
    function dfs(left, right, t) {
        if (left == n && right == n) {
            ans.push(t);
            return;
        }
        if (left < n) {
            dfs(left + 1, right, t + '(');
        }
        if (right < left) {
            dfs(left, right + 1, t + ')');
        }
    }
    var ans = [];
    dfs(0, 0, '');
    return ans;
}

