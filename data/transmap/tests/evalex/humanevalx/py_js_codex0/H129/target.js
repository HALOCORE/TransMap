function minPath(grid, k) {
    let n = grid.length;
    let val = n * n + 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let temp = [];
                if (i !== 0) {
                    temp.push(grid[i - 1][j]);
                }
                if (j !== 0) {
                    temp.push(grid[i][j - 1]);
                }
                if (i !== n - 1) {
                    temp.push(grid[i + 1][j]);
                }
                if (j !== n - 1) {
                    temp.push(grid[i][j + 1]);
                }
                val = Math.min(...temp);
            }
        }
    }
    let ans = [];
    for (let i = 0; i < k; i++) {
        if (i % 2 === 0) {
            ans.push(1);
        } else {
            ans.push(val);
        }
    }
    return ans;
}

