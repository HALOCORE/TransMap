
function f_gold(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let rows = new Array(m).fill(0);
    let cols = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                rows[i] += 1;
                cols[j] += 1;
            }
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                if (rows[i] > 1 || cols[j] > 1) {
                    res += 1;
                }
            }
        }
    }
    return res;
}

