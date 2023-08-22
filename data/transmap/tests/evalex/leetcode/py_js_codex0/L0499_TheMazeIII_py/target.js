
const f_gold = (maze, ball, hole) => {
    let m = maze.length;
    let n = maze[0].length;
    let r = ball[0];
    let c = ball[1];
    let rh = hole[0];
    let ch = hole[1];
    let q = new Array();
    q.push([r, c]);
    let dist = new Array(m);
    for (let i = 0; i < m; i++) {
        dist[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dist[i][j] = Number.POSITIVE_INFINITY;
        }
    }
    dist[r][c] = 0;
    let path = new Array(m);
    for (let i = 0; i < m; i++) {
        path[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            path[i][j] = null;
        }
    }
    path[r][c] = '';
    while (q.length > 0) {
        let i = q[0][0];
        let j = q[0][1];
        q.shift();
        for (let a = -1; a <= 1; a += 2) {
            for (let b = -1; b <= 1; b += 2) {
                let x = i;
                let y = j;
                let step = dist[i][j];
                while (
                    x + a >= 0 &&
                    x + a < m &&
                    y + b >= 0 &&
                    y + b < n &&
                    maze[x + a][y + b] == 0 &&
                    (x != rh || y != ch)
                ) {
                    x += a;
                    y += b;
                    step += 1;
                }
                if (
                    dist[x][y] > step ||
                    (dist[x][y] == step && path[i][j] + d < path[x][y])
                ) {
                    dist[x][y] = step;
                    path