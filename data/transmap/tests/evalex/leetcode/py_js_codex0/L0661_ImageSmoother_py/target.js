function f_gold(img) {
    let m = img.length;
    let n = img[0].length;
    let ans = new Array(m);
    for (let i = 0; i < m; i++) {
        ans[i] = new Array(n);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let s = 0;
            let cnt = 0;
            for (let x = i - 1; x < i + 2; x++) {
                for (let y = j - 1; y < j + 2; y++) {
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        cnt += 1;
                        s += img[x][y];
                    }
                }
            }
            ans[i][j] = Math.floor(s / cnt);
        }
    }
    return ans;
}

