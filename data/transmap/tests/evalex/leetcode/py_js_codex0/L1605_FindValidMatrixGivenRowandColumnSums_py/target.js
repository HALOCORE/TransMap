const f_gold = (rowSum, colSum) => {
    let m = rowSum.length;
    let n = colSum.length;
    let ans = Array(m).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let x = Math.min(rowSum[i], colSum[j]);
            ans[i][j] = x;
            rowSum[i] -= x;
            colSum[j] -= x;
        }
    }
    return ans;
}

