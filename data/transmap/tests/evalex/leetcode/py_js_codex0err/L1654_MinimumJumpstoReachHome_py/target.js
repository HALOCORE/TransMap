
const f_gold = (forbidden, a, b, x) => {
    let s = new Set(forbidden);
    let q = new Array();
    q.push([0, 0]);
    let vis = new Set([[0, 1], [0, -1]]);
    let ans = 0;
    while (q.length > 0) {
        for (let _ = 0; _ < q.length; _++) {
            let i = q[0][0];
            let dir = q[0][1];
            q.shift();
            if (i == x) {
                return ans;
            }
            let nxt = [[i + a, 1]];
            if (dir != -1) {
                nxt.push([i - b, -1]);
            }
            for (let j = 0; j < nxt.length; j++) {
                let dir = nxt[j][1];
                if (0 <= nxt[j][0] <= 6000 && !s.has(nxt[j][0]) && !vis.has([nxt[j][0], dir])) {
                    vis.add([nxt[j][0], dir]);
                    q.push([nxt[j][0], dir]);
                }
            }
        }
        ans += 1;
    }
    return -1;
}

