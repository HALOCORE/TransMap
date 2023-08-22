function f_gold(n) {
    function get_next(n) {
        var s = 0;
        while (n > 0) {
            var digit = n % 10;
            n = Math.floor(n / 10);
            s += digit * digit;
        }
        return s;
    }
    var visited = new Set();
    while (n != 1 && !visited.has(n)) {
        visited.add(n);
        n = get_next(n);
    }
    return n == 1;
}

