function f_gold(s) {
    var counter = new Map();
    for (var i = 0; i < s.length; i++) {
        if (counter.has(s[i])) {
            counter.set(s[i], counter.get(s[i]) + 1);
        }
        else {
            counter.set(s[i], 1);
        }
    }
    var vals = Array.from(counter.values());
    vals.sort(function (a, b) { return b - a; });
    var ans = 0;
    for (var i = 1; i < vals.length; i++) {
        while (vals[i] >= vals[i - 1] && vals[i] > 0) {
            vals[i] -= 1;
            ans += 1;
        }
    }
    return ans;
}

