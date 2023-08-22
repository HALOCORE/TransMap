function f_gold(numerator, denominator) {
    if (numerator == 0) {
        return '0';
    }
    var res = [];
    var neg = (numerator > 0) ^ (denominator > 0);
    if (neg) {
        res.push('-');
    }
    var num = Math.abs(numerator);
    var d = Math.abs(denominator);
    res.push(String(Math.floor(num / d)));
    num %= d;
    if (num == 0) {
        return res.join('');
    }
    res.push('.');
    var mp = {};
    while (num != 0) {
        mp[num] = res.length;
        num *= 10;
        res.push(String(Math.floor(num / d)));
        num %= d;
        if (num in mp) {
            var idx = mp[num];
            res.splice(idx, 0, '(');
            res.push(')');
            break;
        }
    }
    return res.join('');
}

