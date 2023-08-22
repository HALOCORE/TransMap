function f_gold(s, k) {
    if (s.length <= k) {
        return s;
    }
    var t = [];
    while (s) {
        t.push(String(s.slice(0, k).split('').reduce((a, b) => parseInt(a) + parseInt(b), 0)));
        s = s.slice(k);
    }
    return f_gold(t.join(''), k);
}

