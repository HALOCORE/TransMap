
const f_gold = (maze, start, destination) => {
    let m = maze.length;
    let n = maze[0].length;
    let rs = start[0];
    let cs = start[1];
    let rd = destination[0];
    let cd = destination[1];
    let dist = new Array(m);
    for (let i = 0; i < m; i++) {
        dist[i] = new Array(n);
        for (let j = 0; j < n; j++) {
            dist[i][j] = Number.POSITIVE_INFINITY;
        }
    }
    dist[rs][cs] = 0;
    let q = new Array();
    q.push([rs, cs]);
    while (q.length > 0) {
        let i = q[0][0];
        let j = q[0][1];
        q.shift();
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 2; b++) {
                let x = i;
                let y = j;
                let step = dist[i][j];
                while (x + a >= 0 && x + a < m && y + b >= 0 && y + b < n && maze[x + a][y + b] == 0) {
                    x = x + a;
                    y = y + b;
                    step = step + 1;
                }
                if (step < dist[x][y]) {
                    dist[x][y] = step;
                    q.push([x, y]);
                }
            }
        }
    }
    return dist[rd][cd] == Number.POSITIVE_INFINITY ? -1 : dist[rd][cd];
};

