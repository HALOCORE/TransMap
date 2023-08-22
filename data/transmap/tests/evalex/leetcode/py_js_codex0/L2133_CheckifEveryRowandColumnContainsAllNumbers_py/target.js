function f_gold(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        let seen = new Array(n).fill(false);
        for (let j = 0; j < n; j++) {
            let v = matrix[i][j] - 1;
            if (seen[v]) {
                return false;
            }
            seen[v] = true;
        }
    }
    for (let j = 0; j < n; j++) {
        let seen = new Array(n).fill(false);
        for (let i = 0; i < n; i++) {
            let v = matrix[i][j] - 1;
            if (seen[v]) {
                return false;
            }
            seen[v] = true;
        }
    }
    return true;
}

