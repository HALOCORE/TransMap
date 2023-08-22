const f_gold = (n, edges) => {
    let s = new Set();
    for (let i = 0; i < edges.length; i++) {
        s.add(edges[i][1]);
    }
    let result = [];
    for (let i = 0; i < n; i++) {
        if (!s.has(i)) {
            result.push(i);
        }
    }
    return result;
}

