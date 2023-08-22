function f_gold(N, K) {
    var ans = 0;
    var y = N / K;
    var x = N % K;
    ans = ((K * (K - 1) / 2) * y + (x * (x + 1)) / 2);
    return Math.floor(ans);
}

