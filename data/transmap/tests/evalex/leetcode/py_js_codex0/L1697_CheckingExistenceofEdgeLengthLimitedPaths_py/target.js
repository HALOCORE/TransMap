function f_gold(n, edgeList, queries) {
    function find(x) {
        if (p[x] != x) {
            p[x] = find(p[x]);
        }
        return p[x];
    }
    var p = Array.from(Array(n).keys());
    edgeList.sort(function (x, y) { return x[2] - y[2]; });
    var m = queries.length;
    var indexes = Array.from(Array(m).keys());
    indexes.sort(function (i, j) { return queries[i][2] - queries[j][2]; });
    var ans = Array(m).fill(false);
    var i = 0;
    for (var j of indexes) {
        var pj = queries[j][0];
        var qj = queries[j][1];
        var limit = queries[j][2];
        while (i < edgeList.length && edgeList[i][2] < limit) {
            var u = edgeList[i][0];
            var v = edgeList[i][1];
            p[find(u)] = find(v);
            i++;
        }
        ans[j] = find(pj) == find(qj);
    }
    return ans;
}

