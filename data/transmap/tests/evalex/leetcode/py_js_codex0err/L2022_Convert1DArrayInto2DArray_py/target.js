function f_gold(original, m, n) {
    if (m * n != original.length) {
        return [];
    }
    return [original.slice(i, i + n) for (i = 0; i < m * n; i += n)];
}

