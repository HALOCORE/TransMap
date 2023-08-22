function f_gold(n) {
    var team = [];
    for (var i = 0; i < n; i++) {
        team.push(i + 1);
    }
    while (n > 1) {
        for (var i = 0; i < n >> 1; i++) {
            team[i] = `(${team[i]},${team[n - 1 - i]})`;
        }
        n >>= 1;
    }
    return team[0];
}

