
function f_gold (n, wells, pipes) {
    for (var i = 0; i < wells.length; i++) {
        pipes.push([0, i + 1, wells[i]]);
    }
    pipes.sort(function (x, y) {
        return x[2] - y[2];
    });
    var p = Array.from(Array(n + 1).keys());
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var res = 0;
    for (var i = 0; i < pipes.length; i++) {
        var u = pipes[i][0];
        var v = pipes[i][1];
        var w = pipes[i][2];
        if (find(u) == find(v)) {
            continue;
        }
        p[find(u)] = find(v);
        res += w;
        n -= 1;
        if (n == 0) {
            break;
        }
    }
    return res;
}

