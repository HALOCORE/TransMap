function f_gold(original, m, n) {
    if (m * n != original.length) {
        return [];
    }
    return original.reduce((acc, cur, i) => {
        if (i % n === 0) {
            acc.push(original.slice(i, i + n));
        }
        return acc;
    }, []);
}

