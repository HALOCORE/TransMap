function f_gold(n, trust) {
    var N = 1001;
    var c1 = Array(N).fill(0);
    var c2 = Array(N).fill(0);
    for (var i = 0; i < trust.length; i++) {
        c1[trust[i][0]] += 1;
        c2[trust[i][1]] += 1;
    }
    for (var i = 1; i < N; i++) {
        if (c1[i] == 0 && c2[i] == n - 1) {
            return i;
        }
    }
    return -1;
}

