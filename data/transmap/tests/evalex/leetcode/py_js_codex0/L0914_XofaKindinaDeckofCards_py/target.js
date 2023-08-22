const f_gold = (deck) => {
    let vals = Object.values(Counter(deck));
    return reduce(gcd, vals) >= 2;
}

