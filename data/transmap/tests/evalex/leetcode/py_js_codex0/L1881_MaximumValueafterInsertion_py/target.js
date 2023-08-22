function f_gold(n, x) {
    var negative = n[0] == '-';
    var i = 0;
    var res = [];
    if (negative) {
        i += 1;
        res.push('-');
    }
    var find = false;
    while (i < n.length) {
        var num = parseInt(n[i]);
        if ((negative && x < num) || (!negative && x > num)) {
            res.push(x.toString());
            find = true;
            break;
        }
        res.push(n[i]);
        i += 1;
    }
    res.push(find ? n.slice(i) : x.toString());
    return res.join('');
}

