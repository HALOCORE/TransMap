
function f_gold (mat) {
    var m = mat.length;
    var n = mat[0].length;
    var state = 0;
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (mat[i][j]) {
                state += 1 << (i * n + j);
            }
        }
    }
    var q = [state];
    var vis = {};
    vis[state] = true;
    var ans = 0;
    var dirs = [0, -1, 0, 1, 0, 0];
    while (q.length > 0) {
        for (var _ = 0; _ < q.length; _++) {
            state = q.shift();
            if (state == 0) {
                return ans;
            }
            for (var i = 0; i < m; i++) {
                for (var j = 0; j < n; j++) {
                    var nxt = state;
                    for (var k = 0; k < 5; k++) {
                        var x = i + dirs[k];
                        var y = j + dirs[k + 1];
                        if (!(0 <= x && x < m) || !(0 <= y && y < n)) {
                            continue;
                        }
                        if (nxt & (1 << (x * n + y))) {
                            nxt -= 1 << (x * n + y);
                        }
                        else {
                            nxt |= 1 << (x * n + y);
                        }
                    }
                    if (!vis[nxt]) {
                        vis[nxt] = true;
                        q.push(nxt);
                    }
                }
            }
        }
        ans += 1;
    }
    return -1;
}

