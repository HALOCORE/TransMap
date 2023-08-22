function f_gold(picture) {
    let m, n = picture.length, picture[0].length;
    let rows, cols = [0] * m, [0] * n;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (picture[i][j] == 'B') {
                rows[i] += 1;
                cols[j] += 1;
            }
        }
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        if (rows[i] == 1) {
            for (let j = 0; j < n; j++) {
                if (picture[i][j] == 'B' && cols[j] == 1) {
                    res += 1;
                    break;
                }
            }
        }
    }
    return res;
}

