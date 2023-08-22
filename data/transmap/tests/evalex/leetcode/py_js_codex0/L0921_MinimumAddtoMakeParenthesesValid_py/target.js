function f_gold(s) {
    let stk = [];
    for (let c of s) {
        if (c == '(') {
            stk.push(c);
        } else {
            if (stk.length > 0 && stk[stk.length - 1] == '(') {
                stk.pop();
            } else {
                stk.push(c);
            }
        }
    }
    return stk.length;
}

