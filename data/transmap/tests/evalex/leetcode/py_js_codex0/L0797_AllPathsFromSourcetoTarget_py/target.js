
function f_gold(graph) {
    let n = graph.length;
    let q = [[0]];
    let ans = [];
    while (q.length > 0) {
        let path = q.shift();
        let u = path[path.length - 1];
        if (u == n - 1) {
            ans.push(path);
            continue;
        }
        for (let v of graph[u]) {
            q.push(path.concat([v]));
        }
    }
    return ans;
}

