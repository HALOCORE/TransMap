
const f_gold = (grid) => {
    if (grid[0][0]) return -1;
    let n = grid.length;
    let q = new Array();
    q.push([0, 0]);
    grid[0][0] = 1;
    let ans = 0;
    while (q.length > 0) {
        ans += 1;
        for (let _ = 0; _ < q.length; _++) {
            let i = q[0][0];
            let j = q[0][1];
            q.shift();
            if (i == n - 1 && j == n - 1) return ans;
            for (let x = i - 1; x < i + 2; x++) {
                for (let y = j - 1; y < j + 2; y++) {
                    if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] == 0) {
                        q.push([x, y]);
                        grid[x][y] = 1;
                    }
                }
            }
        }
    }
    return -1;
}

//TOFILL

export {f_gold};