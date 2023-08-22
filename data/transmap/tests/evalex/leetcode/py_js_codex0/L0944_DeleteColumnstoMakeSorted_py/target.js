function f_gold(strs) {
    var m = strs[0].length;
    var n = strs.length;
    var ans = 0;
    for (var j = 0; j < m; j++) {
        for (var i = 1; i < n; i++) {
            if (strs[i][j] < strs[i - 1][j]) {
                ans += 1;
                break;
            }
        }
    }
    return ans;
}

