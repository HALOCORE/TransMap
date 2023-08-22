function f_gold(k) {
    function dfs(k) {
        if (k < 2) {
            return k;
        }
        var a = 1;
        var b = 1;
        while (b <= k) {
            var temp = a;
            a = b;
            b = temp + b;
        }
        return 1 + dfs(k - a);
    }
    return dfs(k);
}

