
const f_gold = (n, edges, t, target) => {
    let g = new Map();
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0];
        let v = edges[i][1];
        if (g.has(u)) {
            g.get(u).push(v);
        } else {
            g.set(u, [v]);
        }
        if (g.has(v)) {
            g.get(v).push(u);
        } else {
            g.set(v, [u]);
        }
    }
    let q = [[1, 1.0]];
    let vis = new Array(n + 1).fill(false);
    vis[1] = true;
    while (q.length > 0 && t >= 0) {
        for (let i = 0; i < q.length; i++) {
            let u = q[i][0];
            let p = q[i][1];
            let nxt = [];
            for (let v of g.get(u)) {
                if (!vis[v]) {
                    nxt.push(v);
                }
            }
            if (u == target && (nxt.length == 0 || t == 0)) {
                return p;
            }
            for (let v of nxt) {
                vis[v] = true;
                q.push([v, p / nxt.length]);
            }
        }
        t -= 1;
    }
    return 0;
}

### Python

### frogPosition 
from collections import deque
from collections import defaultdict
from typing import *
def f_gold(n: int, edges: List[List[int]], t: int, target: int
) -> float:
    g = defaultdict(list)
    for u, v in edges:
        g[u].append(v)
        g[v].append(u)
    q = deque([(1, 1.0)])
    vis = [False] * (n + 1)
    vis[1] = True
    while