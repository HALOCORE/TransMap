
function f_gold(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let g = Array(m).fill(0).map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        let t = 0;
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 'W') {
                t = 0;
            } else if (grid[i][j] == 'E') {
                t += 1;
            }
            g[i][j] += t;
        }
        t = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] == 'W') {
                t = 0;
            } else if (grid[i][j] == 'E') {
                t += 1;
            }
            g[i][j] += t;
        }
    }
    for (let j = 0; j < n; j++) {
        let t = 0;
        for (let i = 0; i < m; i++) {
            if (grid[i][j] == 'W') {
                t = 0;
            } else if (grid[i][j] == 'E') {
                t += 1;
            }
            g[i][j] += t;
        }
        t = 0;
        for (let i = m - 1; i >= 0; i--) {
            if (grid[i][j] == 'W') {
                t = 0;
            } else if (grid[i][j] == 'E') {
                t += 1;
            }
            g[i][j] += t;
        }
    }
    return Math.max(...[g[i][j] for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) if (grid[i][j] == '0')], 0);
}

