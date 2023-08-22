function f_gold(s1, s2) {
    let c = Object.assign(Object.assign({}, s1.split()), s2.split());
    return [w for (w, n) in c.items() if n == 1];
}

