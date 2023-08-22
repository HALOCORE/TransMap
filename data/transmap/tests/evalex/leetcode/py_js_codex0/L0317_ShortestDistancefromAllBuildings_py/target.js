
const f_gold = (grid) => {
    let m = grid.length;
    let n = grid[0].length;
    let q = [];
    let total = 0;
    let cnt = [];
    let dist = [];
    for (let i = 0; i < m; i++) {
        cnt.push([]);
        dist.push([]);
        for (let j = 0; j < n; j++) {
            cnt[i].push(0);
            dist[i].push(0);
            if (grid[i][j] == 1) {
                total += 1;
                q.push([i, j]);
                let d = 0;
                let vis = new Set();
                while (q.length > 0) {
                    d += 1;
                    for (let _ = 0; _ < q.length; _++) {
                        let r = q.shift();
                        let c = q.shift();
                        for (let a = 0; a < 2; a++) {
                            for (let b = 0; b < 2; b++) {
                                let x = r + a;
                                let y = c + b;
                                if (
                                    0 <= x < m &&
                                    0 <= y < n &&
                                    grid[x][y] == 0 &&
                                    !vis.has([x, y])
                                ) {
                                    cnt[x][y] += 1;
                                    dist[x][y] += d;
                                    q.push([x, y]);
                                    vis.add([x, y]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let ans = Number.MAX_VALUE;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0 && cnt[i][j] == total) {
                ans = Math.min(ans, dist[i][j]);
            }
        }
    }
    return ans == Number.MAX_VALUE ? -1 : ans;