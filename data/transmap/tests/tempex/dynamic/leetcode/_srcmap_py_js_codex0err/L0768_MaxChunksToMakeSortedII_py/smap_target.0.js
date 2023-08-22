function f_gold(arr) {
    let stk = [];
    for (let v of arr) {
        if (!stk || v >= stk[stk.length - 1]) {
            stk.push(v);
        }
        else {
            let mx = stk.pop();
            while (stk && stk[stk.length - 1] > v) {
                stk.pop();
            }
            stk.push(mx);
        }
    }
    return stk.length;
}

