
function f_gold(heights) {
    function bfs(q, vis) {
        while (q.length > 0) {
            for (let _ = 0; _ < q.length; _++) {
                let i = q.shift();
                let j = q.shift();
                for (let a = 0; a < 2; a++) {
                    for (let b = 0; b < 2; b++) {
                        let x = i + a;
                        let y = j + b;
                        if (
                            0 <= x < m &&
                            0 <= y < n &&
                            !vis.has(x + "," + y) &&
                            heights[x][y] >= heights[i][j]
                        ) {
                            vis.add(x + "," + y);
                            q.push(x);
                            q.push(y);
                        }
                    }
                }
            }
        }
    }
    let m = heights.length;
    let n = heights[0].length;
    let vis1 = new Set();
    let vis2 = new Set();
    let q1 = [];
    let q2 = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i == 0 || j == 0) {
                vis1.add(i + "," + j);
                q1.push(i);
                q1.push(j);
            }
            if (i == m - 1 || j == n - 1) {
                vis2.add(i + "," + j);
                q2.push(i);
                q2.push(j);
            }
        }
    }
    bfs(q1, vis1);
    bfs(q2, vis2);
    let res = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (vis1.has(i + "," + j) && vis2.has(i + "," + j)) {
                res.push