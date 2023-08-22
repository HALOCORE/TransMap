function sort_third(l) {
    l = l.slice();
    l.splice(0, l.length, ...l.slice(0, l.length).sort((a, b) => a - b));
    return l;
}

