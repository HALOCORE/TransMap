
function f_gold(grid) {
    function dfs(i, j) {
        if (!(0 <= i < m && 0 <= j < n && grid[i][j])) return 0;
        let t = grid[i][j];
        grid[i][j] = 0;
        let ans = t + Math.max(...[[0, 1], [0, -1], [-1, 0], [1, 0]].map(([a, b]) => dfs(i + a, j + b)));
        grid[i][j] = t;
        return ans;
    }
    let m = grid.length;
    let n = grid[0].length;
    return Math.max(...[...Array(m).keys()].map(i => [...Array(n).keys()].map(j => dfs(i, j))));
}

