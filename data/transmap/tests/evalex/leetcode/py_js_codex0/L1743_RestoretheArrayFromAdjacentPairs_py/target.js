
function f_gold(adjacentPairs) {
    var graph = new Map();
    for (var pair of adjacentPairs) {
        if (graph.has(pair[0])) {
            graph.get(pair[0]).push(pair[1]);
        }
        else {
            graph.set(pair[0], [pair[1]]);
        }
        if (graph.has(pair[1])) {
            graph.get(pair[1]).push(pair[0]);
        }
        else {
            graph.set(pair[1], [pair[0]]);
        }
    }
    var ans = [];
    var vis = new Set();
    function dfs(idx) {
        if (vis.has(idx)) {
            return;
        }
        vis.add(idx);
        ans.push(idx);
        for (var nxt of graph.get(idx)) {
            dfs(nxt);
        }
    }
    var start = -1;
    for (var [idx, adj] of graph) {
        if (adj.length == 1) {
            start = idx;
            break;
        }
    }
    dfs(start);
    return ans;
}

