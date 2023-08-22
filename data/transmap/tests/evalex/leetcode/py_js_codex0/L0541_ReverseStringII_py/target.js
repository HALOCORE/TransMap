function f_gold(s, k) {
    var t = s.split("");
    for (var i = 0; i < t.length; i += (k << 1)) {
        t.splice(i, k, ...t.slice(i, i + k).reverse());
    }
    return t.join("");
}

