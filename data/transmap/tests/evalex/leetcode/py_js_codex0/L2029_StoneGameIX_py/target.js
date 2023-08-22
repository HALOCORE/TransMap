function f_gold(stones) {
    function check(c) {
        if (c[1] == 0) {
            return false;
        }
        c[1] -= 1;
        var turn = 1 + Math.min(c[1], c[2]) * 2 + c[0];
        if (c[1] > c[2]) {
            turn += 1;
            c[1] -= 1;
        }
        return turn % 2 == 1 && c[1] != c[2];
    }
    var c = [0, 0, 0];
    for (var i = 0; i < stones.length; i++) {
        c[stones[i] % 3] += 1;
    }
    var c1 = [c[0], c[2], c[1]];
    return check(c) || check(c1);
}

