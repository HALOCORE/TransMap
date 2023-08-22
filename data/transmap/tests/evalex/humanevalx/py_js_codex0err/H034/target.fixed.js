function unique(l) {
    return l.filter((v, i, a) => a.indexOf(v) === i).sort((a, b)=>a-b);
}

