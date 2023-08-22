function get_odd_collatz(n) {
    let odd_collatz = [];
    if (n % 2 == 0) {
        odd_collatz = [];
    }
    else {
        odd_collatz = [n];
    }
    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2;
        }
        else {
            n = n * 3 + 1;
        }
        if (n % 2 == 1) {
            odd_collatz.push(Math.floor(n));
        }
    }
    return odd_collatz.sort((a, b) => a-b);
}

