function f_gold(strs) {
    var n = strs.length;
    if (n == 0) {
        return '';
    }
    for (var i = 0; i < strs[0].length; i++) {
        for (var j = 1; j < n; j++) {
            if (strs[j].length <= i || strs[j][i] != strs[0][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
}

