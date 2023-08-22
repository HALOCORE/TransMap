function f_gold(parents) {
    var n = parents.length;
    var max_score = 0;
    var ans = 0;
    var g = [];
    for (var _ = 0; _ < n; _++) {
        g.push([]);
    }
    for (var i = 1; i < n; i++) {
        g[parents[i]].push(i);
    }
    function dfs(cur) {
        var size = 1;
        var score = 1;
        for (var c of g[cur]) {
            var s = dfs(c);
            size += s;
            score *= s;
        }
        if (cur > 0) {
            score *= n - size;
        }
        if (score > max_score) {
            max_score = score;
            ans = 1;
        }
        else if (score == max_score) {
            ans += 1;
        }
        return size;
    }
    dfs(0);
    return ans;
}

