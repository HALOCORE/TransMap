function f_gold(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var chars = new Array(26).fill(0);
    for (var i = 0; i < s.length; i++) {
        chars[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
        chars[t.charCodeAt(i) - 'a'.charCodeAt(0)] -= 1;
    }
    return chars.every(function (c) { return c == 0; });
}

