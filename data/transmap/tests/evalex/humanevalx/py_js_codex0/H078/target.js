function hex_key(num) {
    var primes = ['2', '3', '5', '7', 'B', 'D'];
    var total = 0;
    for (var i = 0; i < num.length; i++) {
        if (primes.indexOf(num[i]) > -1) {
            total += 1;
        }
    }
    return total;
}

