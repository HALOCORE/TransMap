function f_gold(rooms) {
    function dfs(u) {
        if (vis.has(u)) {
            return;
        }
        vis.add(u);
        for (let v of rooms[u]) {
            dfs(v);
        }
    }
    let vis = new Set();
    dfs(0);
    return vis.size == rooms.length;
}

