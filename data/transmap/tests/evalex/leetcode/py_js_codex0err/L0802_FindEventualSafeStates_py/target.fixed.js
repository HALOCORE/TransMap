function f_gold(graph) {
    let n = graph.length;
    let outDegree = graph.map(vs => vs.length);
    let revGraph = {};
    for (let u = 0; u < graph.length; u++) {
        for (let v of graph[u]) {
            if (!revGraph[v]) revGraph[v] = [];
            revGraph[v].push(u);
        }
    }
    let q = [...Array(n).keys()].filter(i => outDegree[i] == 0);
    while (q.length > 0) {
        for (let u of revGraph[q.shift()] ?? []) {
            outDegree[u] -= 1;
            if (outDegree[u] == 0) {
                q.push(u);
            }
        }
    }
    return [...Array(n).keys()].filter(i => outDegree[i] == 0);
}

