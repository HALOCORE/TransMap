function f_gold(path) {
    let stk = [];
    for (let s of path.split('/')) {
        if (!s || s == '.') {
            continue;
        }
        if (s == '..') {
            if (stk.length > 0) {
                stk.pop();
            }
        }
        else {
            stk.push(s);
        }
    }
    return '/' + stk.join('/');
}

