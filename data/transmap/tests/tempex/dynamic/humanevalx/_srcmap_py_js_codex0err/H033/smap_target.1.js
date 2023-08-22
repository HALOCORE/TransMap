function sort_third(l) {
    var aux = l.filter((value, index) => index % 3 === 0).sort((a, b) => a - b);
    l.splice(0, l.length, ...l.slice(0, l.length).sort((a, b) => a - b));
    return l;
}

