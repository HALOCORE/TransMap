function f_gold(pushed, popped) {
    var stk = [];
    var j = 0;
    var n = popped.length;
    for (var x of pushed) {
        stk.push(x);
        while (stk.length > 0 && j < n && stk[stk.length - 1] == popped[j]) {
            stk.pop();
            j++;
        }
    }
    return j == n;
}

