function f_gold(code, k) {
    var n = code.length;
    var res = new Array(n).fill(0);
    if (k == 0) {
        return res;
    }
    for (var i = 0; i < n; i++) {
        if (k > 0) {
            for (var j = i + 1; j < i + k + 1; j++) {
                res[i] += code[j % n];
            }
        }
        else {
            for (var j = i + k; j < i; j++) {
                res[i] += code[(j + n) % n];
            }
        }
    }
    return res;
}

