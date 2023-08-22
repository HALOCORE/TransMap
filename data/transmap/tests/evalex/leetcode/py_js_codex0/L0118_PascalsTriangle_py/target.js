function f_gold(numRows) {
    var ans = [];
    for (var i = 0; i < numRows; i++) {
        var t = [
            1 if (j == 0 || j == i) else ans[ans.length - 1][j] + ans[ans.length - 1][j - 1]
            for (var j = 0; j < i + 1)
        ];
        ans.push(t);
    }
    return ans;
}

