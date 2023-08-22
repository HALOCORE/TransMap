function f_gold(preorder) {
    var stk = [];
    var last = -Infinity;
    for (var x of preorder) {
        if (x < last) {
            return false;
        }
        while (stk.length > 0 && stk[stk.length - 1] < x) {
            last = stk.pop();
        }
        stk.push(x);
    }
    return true;
}

