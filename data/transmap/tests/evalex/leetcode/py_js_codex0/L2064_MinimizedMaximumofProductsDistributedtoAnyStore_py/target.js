function f_gold(n, quantities) {
    var left = 1;
    var right = Math.floor(Math.pow(10, 5));
    while (left < right) {
        var mid = Math.floor((left + right) / 2);
        var s = 0;
        for (var i = 0; i < quantities.length; i++) {
            s += Math.floor((quantities[i] + mid - 1) / mid);
        }
        if (s <= n) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
}

