function f_gold(a, b) {
    var m = a.length;
    var n = b.length;
    var ans = Math.ceil(n / m);
    var t = [a];
    for (var _ = 0; _ < 3; _++) {
        if (b.indexOf(t.join("")) != -1) {
            return ans;
        }
        ans += 1;
        t.push(a);
    }
    return -1;
}

