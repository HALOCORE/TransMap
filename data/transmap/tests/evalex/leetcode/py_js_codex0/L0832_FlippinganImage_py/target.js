function f_gold(A) {
    var m, n;
    m = A.length;
    n = A[0].length;
    for (var i = 0; i < m; i++) {
        var p, q;
        p = 0;
        q = n - 1;
        while (p < q) {
            var t;
            t = A[i][p] ^ 1;
            A[i][p] = A[i][q] ^ 1;
            A[i][q] = t;
            p += 1;
            q -= 1;
        }
        if (p == q) {
            A[i][p] ^= 1;
        }
    }
    return A;
}

