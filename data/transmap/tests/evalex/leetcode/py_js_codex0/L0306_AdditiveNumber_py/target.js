function f_gold(num) {
    function dfs(a, b, num) {
        if (!num) {
            return true;
        }
        if (a + b > 0 && num[0] == '0') {
            return false;
        }
        for (var i = 1; i < num.length + 1; i++) {
            if (a + b == parseInt(num.substring(0, i))) {
                if (dfs(b, a + b, num.substring(i))) {
                    return true;
                }
            }
        }
        return false;
    }
    var n = num.length;
    for (var i = 1; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            if (i > 1 && num[0] == '0') {
                break;
            }
            if (j - i > 1 && num[i] == '0') {
                continue;
            }
            if (dfs(parseInt(num.substring(0, i)), parseInt(num.substring(i, j)), num.substring(j))) {
                return true;
            }
        }
    }
    return false;
}

