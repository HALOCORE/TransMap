
function f_gold (bombs) {
    function check (i, j) {
        if (i == j) {
            return false;
        }
        var x = bombs[i][0] - bombs[j][0];
        var y = bombs[i][1] - bombs[j][1];
        var r = bombs[i][2];
        return r * r >= x * x + y * y;
    }
    var g = new Map();
    var n = bombs.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (check(i, j)) {
                if (g.has(i)) {
                    g.get(i).push(j);
                }
                else {
                    g.set(i, [j]);
                }
            }
        }
    }
    var ans = 0;
    for (var k = 0; k < n; k++) {
        var q = [k];
        var vis = new Array(n).fill(false);
        vis[k] = true;
        var cnt = 0;
        while (q.length > 0) {
            var i = q.shift();
            cnt++;
            for (var j = 0; j < g.get(i).length; j++) {
                if (!vis[g.get(i)[j]]) {
                    vis[g.get(i)[j]] = true;
                    q.push(g.get(i)[j]);
                }
            }
        }
        ans = Math.max(ans, cnt);
    }
    return ans;
}

