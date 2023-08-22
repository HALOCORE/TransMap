function skjkasdkd(lst) {
    function isPrime(n) {
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    var maxx = 0;
    var i = 0;
    while (i < lst.length) {
        if (lst[i] > maxx && isPrime(lst[i])) {
            maxx = lst[i];
        }
        i++;
    }
    var result = Number(maxx.toString().split("").reduce(function (a, b) { return parseInt(a) + parseInt(b); }));
    return result;
}

