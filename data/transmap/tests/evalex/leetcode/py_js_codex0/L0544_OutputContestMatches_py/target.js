function f_gold(n) {
    var team = [str(i + 1) for i in range(n)];
    while (n > 1) {
        for (var i = 0; i < n >> 1; i++) {
            team[i] = f'({team[i]},{team[n - 1 - i]})';
        }
        n >>= 1;
    }
    return team[0];
}

