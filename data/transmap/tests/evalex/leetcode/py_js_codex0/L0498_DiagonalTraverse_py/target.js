function f_gold(mat) {
    var m = mat.length;
    var n = mat[0].length;
    var ans = [];
    for (var k = 0; k < m + n - 1; k++) {
        var t = [];
        var i = 0;
        if (k < n) {
            i = 0;
        }
        else {
            i = k - n + 1;
        }
        var j = k;
        if (k < n) {
            j = k;
        }
        else {
            j = n - 1;
        }
        while (i < m && j >= 0) {
            t.push(mat[i][j]);
            i++;
            j--;
        }
        if (k % 2 == 0) {
            t = t.reverse();
        }
        ans.push(...t);
    }
    return ans;
}

