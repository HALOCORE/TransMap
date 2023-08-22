function f_gold(arr, n) {
    return arr.reduce((a, b) => a + b, 0) - (((n - 1) * n) / 2);
}

