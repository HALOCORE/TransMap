function f_gold(ops) {
    let stk = [];
    for (let op of ops) {
        if (op == '+') {
            stk.push(stk[stk.length - 1] + stk[stk.length - 2]);
        }
        else if (op == 'D') {
            stk.push(stk[stk.length - 1] << 1);
        }
        else if (op == 'C') {
            stk.pop();
        }
        else {
            stk.push(parseInt(op));
        }
    }
    return stk.reduce((a, b) => a + b, 0);
}

