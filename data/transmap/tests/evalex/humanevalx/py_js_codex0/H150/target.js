function x_or_y(n, x, y) {
    if (n === 1) {
        return y;
    }
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return y;
            break;
        }
    }
    return x;
}

