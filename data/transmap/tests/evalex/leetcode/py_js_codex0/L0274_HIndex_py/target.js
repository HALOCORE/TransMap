
function f_gold(citations) {
    var n = citations.length;
    var cnt = new Array(n + 1).fill(0);
    for (var c of citations) {
        if (c <= n) {
            cnt[c] += 1;
        }
        else {
            cnt[n] += 1;
        }
    }
    var sum = 0;
    for (var i = n; i >= 0; i--) {
        sum += cnt[i];
        if (sum >= i) {
            return i;
        }
    }
    return 0;
}

