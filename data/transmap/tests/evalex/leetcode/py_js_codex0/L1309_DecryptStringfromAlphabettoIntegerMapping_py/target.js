function f_gold(s) {
    function get(s) {
        return String.fromCharCode(97 + parseInt(s) - 1);
    }
    var i = 0;
    var n = s.length;
    var res = [];
    while (i < n) {
        if (i + 2 < n && s[i + 2] == '#') {
            res.push(get(s.substring(i, i + 2)));
            i += 3;
        }
        else {
            res.push(get(s[i]));
            i += 1;
        }
    }
    return res.join('');
}

