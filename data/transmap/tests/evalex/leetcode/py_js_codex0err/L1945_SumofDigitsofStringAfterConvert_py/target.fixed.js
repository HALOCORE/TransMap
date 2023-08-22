function f_gold(s, k) {
    s = s.split("").map(function (c) { return String(c.charCodeAt(0) - "a".charCodeAt(0) + 1); }).join("");
    for (var _ = 0; _ < k; _++) {
        var t = 0;
        for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
            var c = s_1[_i];
            t += c.charCodeAt(0) - "0".charCodeAt(0);
        }
        s = String(t);
    }
    return parseInt(s);
}

