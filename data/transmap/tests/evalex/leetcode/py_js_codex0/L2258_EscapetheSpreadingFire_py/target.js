
function f_gold(grid) {
    function spread(fire, q) {
        var nf = new Array();
        while (q.length > 0) {
            var i = q.shift();
            var j = q.shift();
            for (var a = 0; a < 2; a++) {
                for (var b = 0; b < 2; b++) {
                    var x = i + a;
                    var y = j + b;
                    if (0 <= x && x < m && 0 <= y && y < n && !fire[x][y] && grid[x][y] == 0) {
                        fire[x][y] = true;
                        nf.push(x);
                        nf.push(y);
                    }
                }
            }
        }
        return nf;
    }
    function check(t) {
        var fire = new Array(m);
        for (var i = 0; i < m; i++) {
            fire[i] = new Array(n);
            for (var j = 0; j < n; j++) {
                fire[i][j] = false;
            }
        }
        var f = new Array();
        for (var i = 0; i < m; i++) {
            for (var j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    fire[i][j] = true;
                    f.push(i);
                    f.push(j);
                }
            }
        }
        while (t > 0 && f.length > 0) {
            f = spread(fire, f);
            t -= 1;
        }
        if (fire[0][0]) {
            return false;
        }
        var q = new Array();
        q.push(0);
        q.push(0);
        var vis = new Array(m);
        for (var i = 0; i < m; i++) {
            vis[i] = new Array(n);
            for (var j = 0; j < n; j++) {
                vis[i][j] = false;
            }
       