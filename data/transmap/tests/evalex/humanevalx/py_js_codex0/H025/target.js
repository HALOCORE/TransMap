
function factorize(n) {
    var fact = [];
    var i = 2;
    while (i <= Math.sqrt(n) + 1) {
        if (n % i == 0) {
            fact.push(i);
            n = Math.floor(n / i);
        } else {
            i += 1;
        }
    }

    if (n > 1) {
        fact.push(n);
    }
    return fact;
}

