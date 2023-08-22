function f_gold(coins) {
    var res = 1;
    for (var coin of coins.sort()) {
        if (coin > res) {
            break;
        }
        res += coin;
    }
    return res;
}

