function f_gold(n) {
    function convert(n) {
        var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        while (n > 0) {
            counter[n % 10] += 1;
            n = Math.floor(n / 10);
        }
        return counter;
    }
    var i = 1;
    var s = convert(n);
    while (i <= 1000000000) {
        if (convert(i).map((x, i) => x === s[i]).every(x => x)) {
            return true;
        }
        i <<= 1;
    }
    return false;
}

