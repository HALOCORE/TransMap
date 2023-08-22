function sort_third(l) {
    var aux = l.filter((value, index) => index % 3 === 0).sort((a, b) => a - b);
    l = l.map((value, index) => index % 3 === 0 ? aux.shift() : value);
    return l;
}

