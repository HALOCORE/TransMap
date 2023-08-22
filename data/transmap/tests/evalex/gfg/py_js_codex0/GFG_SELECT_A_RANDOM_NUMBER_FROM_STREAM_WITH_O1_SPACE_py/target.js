function f_gold(x) {
    var res = 0;
    var count = 0;
    count += 1;
    if (count == 1) {
        res = x;
    }
    else {
        var i = Math.floor(Math.random() * count);
        if (i == count - 1) {
            res = x;
        }
    }
    return res;
}

