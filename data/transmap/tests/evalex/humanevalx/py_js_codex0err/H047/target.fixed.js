function median(l) {
    l = l.sort((a, b) => a-b);
    if (l.length % 2 == 1) {
        return l[Math.floor(l.length / 2)];
    } else {
        return (l[Math.floor(l.length / 2) - 1] + l[Math.floor(l.length / 2)]) / 2.0;
    }
}

