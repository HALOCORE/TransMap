function f_gold(s, x, y) {
    if (x < y) {
        return f_gold(s.split("").reverse().join(""), y, x);
    }
    var ans = 0;
    var stk1 = [];
    var stk2 = [];
    for (var c of s) {
        if (c != 'b') {
            stk1.push(c);
        }
        else {
            if (stk1.length > 0 && stk1[stk1.length - 1] == 'a') {
                stk1.pop();
                ans += x;
            }
            else {
                stk1.push(c);
            }
        }
    }
    while (stk1.length > 0) {
        var c = stk1.pop();
        if (c != 'b') {
            stk2.push(c);
        }
        else {
            if (stk2.length > 0 && stk2[stk2.length - 1] == 'a') {
                stk2.pop();
                ans += y;
            }
            else {
                stk2.push(c);
            }
        }
    }
    return ans;
}

