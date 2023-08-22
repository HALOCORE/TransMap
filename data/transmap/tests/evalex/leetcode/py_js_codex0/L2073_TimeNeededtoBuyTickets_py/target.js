function f_gold(tickets, k) {
    var ans = 0;
    for (var i = 0; i < tickets.length; i++) {
        if (i <= k) {
            ans += Math.min(tickets[k], tickets[i]);
        }
        else {
            ans += Math.min(tickets[k] - 1, tickets[i]);
        }
    }
    return ans;
}

