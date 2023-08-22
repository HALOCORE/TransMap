function f_gold(num) {
    function match(a, b) {
        if (a in {'0', '1', '8'}) {
            return a == b;
        }
        if (a == '6') {
            return b == '9';
        }
        if (a == '9') {
            return b == '6';
        }
        return false;
    }
    var n = num.length;
    var i = 0;
    var j = n - 1;
    while (i <= j) {
        if (!match(num[i], num[j])) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
}

