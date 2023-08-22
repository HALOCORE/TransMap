
function f_gold(n) {
    let res = Array(n).fill(0).map(() => Array(n).fill(0));
    let num = 1;
    let m1 = 0;
    let m2 = n - 1;
    while (m1 < m2) {
        for (let j = m1; j < m2; j++) {
            res[m1][j] = num;
            num += 1;
        }
        for (let i = m1; i < m2; i++) {
            res[i][m2] = num;
            num += 1;
        }
        for (let j = m2; j > m1; j--) {
            res[m2][j] = num;
            num += 1;
        }
        for (let i = m2; i > m1; i--) {
            res[i][m1] = num;
            num += 1;
        }
        m1 += 1;
        m2 -= 1;
    }
    if (m1 == m2) {
        res[m1][m1] = num;
    }
    return res;
}

