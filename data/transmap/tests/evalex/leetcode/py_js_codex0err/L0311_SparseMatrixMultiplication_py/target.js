
function f_gold(mat1, mat2) {
    var r1 = mat1.length;
    var c1 = mat1[0].length;
    var c2 = mat2[0].length;
    var res = new Array(r1);
    for (var i = 0; i < r1; i++) {
        res[i] = new Array(c2);
        for (var j = 0; j < c2; j++) {
            res[i][j] = 0;
        }
    }
    var mp = new Map();
    for (var i = 0; i < r1; i++) {
        for (var j = 0; j < c1; j++) {
            if (mat1[i][j] != 0) {
                if (mp.has(i)) {
                    mp.get(i).push(j);
                } else {
                    mp.set(i, [j]);
                }
            }
        }
    }
    for (var i = 0; i < r1; i++) {
        for (var j = 0; j < c2; j++) {
            for (var k = 0; k < mp.get(i).length; k++) {
                res[i][j] += mat1[i][mp.get(i)[k]] * mat2[mp.get(i)[k]][j];
            }
        }
    }
    return res;
}

