function same_chars(s0, s1) {
    return ((a, b) => a.size === b.size && [...a].every(value => b.has(value)))(new Set(s0), new Set(s1));
}

