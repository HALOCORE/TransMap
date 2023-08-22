function f_gold(cards) {
    var m = {};
    var ans = 1000000;
    for (var i = 0; i < cards.length; i++) {
        if (cards[i] in m) {
            ans = Math.min(ans, i - m[cards[i]] + 1);
        }
        m[cards[i]] = i;
    }
    return -1 if ans == 1000000 else ans;
}

