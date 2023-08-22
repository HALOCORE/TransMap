function sort_third(l) {
    l = l.slice();
    l = l.map((value, index) => index % 3 === 0 ? aux.shift() : value);
    return l;
}

