
function f_gold(mat, threshold) {
    let m = mat.length;
    let n = mat[0].length;
    let s = Array(310).fill(0).map(() => Array(310).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            s[i + 1][j + 1] = s[i][j + 1] + s[i + 1][j] - s[i][j] + mat[i][j];
        }
    }
    function check(l) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (i + l - 1 < m && j + l - 1 < n) {
                    let i1 = i + l - 1;
                    let j1 = j + l - 1;
                    let t = s[i1 + 1][j1 + 1] - s[i1 + 1][j] - s[i][j1 + 1] + s[i][j];
                    if (t <= threshold) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    let left = 0;
    let right = Math.min(m, n);
    while (left < right) {
        let mid = (left + right + 1) >> 1;
        if (check(mid)) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

