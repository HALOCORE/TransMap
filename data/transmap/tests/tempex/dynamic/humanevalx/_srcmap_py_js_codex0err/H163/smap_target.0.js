
function generate_integers(a, b) {
    let lower = Math.max(2, Math.min(a, b));
    let upper = Math.min(8, Math.max(a, b));

    return [...Array(upper - lower + 1).keys()].map(i => i + lower).filter(i => i % 2 == 0);
}

