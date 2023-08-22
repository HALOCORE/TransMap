function f_gold(n) {
    return [
        `${i}/${j}`
        for (let i = 1; i < n; i++)
        for (let j = i + 1; j < n + 1; j++)
        if (gcd(i, j) == 1)
    ]
}

