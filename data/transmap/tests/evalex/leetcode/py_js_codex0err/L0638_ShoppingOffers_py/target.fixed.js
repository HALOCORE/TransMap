
function f_gold(price, special, needs) {
    function total(price, needs) {
        return needs.map((needs, i) => price[i] * needs).reduce((a, b) => a + b, 0);
    }
    var ans = total(price, needs);
    var t = [];
    for (let offer of special) {
        t.length = 0;
        for (let j = 0; j < needs.length; j++) {
            if (offer[j] > needs[j]) {
                t.length = 0;
                break;
            }
            t.push(needs[j] - offer[j]);
        }
        if (t.length > 0) {
            ans = Math.min(ans, offer.at(-1) + f_gold(price, special, t));
        }
    }
    return ans;
}

