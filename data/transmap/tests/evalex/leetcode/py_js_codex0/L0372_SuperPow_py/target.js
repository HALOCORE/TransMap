function f_gold(a, b) {
    var MOD = 1337;
    var ans = 1;
    for (var e of b.reverse()) {
        ans = ans * Math.pow(a, e, MOD) % MOD;
        a = Math.pow(a, 10, MOD);
    }
    return ans;
}

