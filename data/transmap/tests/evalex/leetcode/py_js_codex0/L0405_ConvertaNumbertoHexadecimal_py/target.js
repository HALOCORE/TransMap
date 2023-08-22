function f_gold(num) {
    if (num === 0)
        return '0';
    var chars = '0123456789abcdef';
    var s = [];
    for (var i = 7; i >= 0; i--) {
        var x = (num >> (4 * i)) & 0xF;
        if (s.length > 0 || x !== 0)
            s.push(chars[x]);
    }
    return s.join('');
}

