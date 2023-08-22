
function f_gold(grid) {
    function dfs(i, j, shape) {
        shape.push([i, j]);
        grid[i][j] = 0;
        for (let a = 0; a < 2; a++) {
            for (let b = 0; b < 2; b++) {
                let x = i + a;
                let y = j + b;
                if (0 <= x && x < m && 0 <= y && y < n && grid[x][y] == 1) {
                    dfs(x, y, shape);
                }
            }
        }
    }
    function normalize(shape) {
        let shapes = [[], [], [], [], [], [], [], []];
        for (let i = 0; i < shape.length; i++) {
            let j = shape[i][0];
            let k = shape[i][1];
            shapes[0].push([j, k]);
            shapes[1].push([j, -k]);
            shapes[2].push([-j, k]);
            shapes[3].push([-j, -k]);
            shapes[4].push([k, j]);
            shapes[5].push([k, -j]);
            shapes[6].push([-k, j]);
            shapes[7].push([-k, -j]);
        }
        for (let e = 0; e < shapes.length; e++) {
            shapes[e].sort();
            for (let i = shapes[e].length - 1; i >= 0; i--) {
                shapes[e][i][0] -= shapes[e][0][0];
                shapes[e][i][1] -= shapes[e][0][1];
            }
        }
        shapes.sort();
        return shapes[0];
    }
    let m = grid.length;
    let n = grid[0].length;
    let s = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j]) {
                let shape = [];
               