function f_gold(s) {
    var res = [];
    for (var c of s) {
        if (c !== 'a' && c !== 'e' && c !== 'i' && c !== 'o' && c !== 'u') {
            res.push(c);
        }
    }
    return res.join('');
}

