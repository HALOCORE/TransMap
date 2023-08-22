function f_gold(coins) {
    var res = 1;
    for (var coin of coins.sort((a, b) => (a - b))) {
        if (coin > res) {
            break;
        }
        res += coin;
    }
    return res;
}

