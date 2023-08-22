function f_gold(n) {
    function dfs(u) {
        if (u == 0) {
            return [''];
        }
        if (u == 1) {
            return ['0', '1', '8'];
        }
        var ans = [];
        for (var v of dfs(u - 2)) {
            for (var l, r of [['1', '1'], ['8', '8'], ['6', '9'], ['9', '6']]) {
                ans.push(l + v + r);
            }
            if (u != n) {
                ans.push('0' + v + '0');
            }
        }
        return ans;
    }
    return dfs(n);
}

