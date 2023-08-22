function f_gold(S) {
    var res = [];
    for (var s of S) {
        if (!res || res[res.length - 1] != s) {
            res.push(s);
        }
        else {
            res.pop();
        }
    }
    return res.join('');
}

