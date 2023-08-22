
function f_gold(land) {
    var m = land.length;
    var n = land[0].length;
    var ans = [];
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (land[i][j] == 0 || (j > 0 && land[i][j - 1] == 1) || (i > 0 && land[i - 1][j] == 1)) continue;
            var x = i;
            var y = j;
            while (x + 1 < m && land[x + 1][j] == 1) x++;
            while (y + 1 < n && land[x][y + 1] == 1) y++;
            ans.push([i, j, x, y]);
        }
    }
    return ans;
}

