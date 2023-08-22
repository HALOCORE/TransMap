function f_gold(pairs) {
    var ans = 0;
    var cur = -Infinity;
    for (var i = 0; i < pairs.length; i++) {
        if (cur < pairs[i][0]) {
            cur = pairs[i][1];
            ans += 1;
        }
    }
    return ans;
}

