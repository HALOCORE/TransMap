function f_gold(s) {
    var num = 0;
    var n = s.length;
    var pre_sign = '+';
    var stack = [];
    for (var i = 0; i < n; i++) {
        if (s[i].match(/\d/)) {
            num = num * 10 + parseInt(s[i]);
        }
        if (i == n - 1 || (!s[i].match(/\d/) && s[i] != ' ')) {
            if (pre_sign == '+') {
                stack.push(num);
            }
            else if (pre_sign == '-') {
                stack.push(-num);
            }
            else if (pre_sign == '*') {
                stack.push(stack.pop() * num);
            }
            else {
                stack.push(parseInt(stack.pop() / num));
            }
            pre_sign = s[i];
            num = 0;
        }
    }
    var res = 0;
    while (stack.length > 0) {
        res += stack.pop();
    }
    return res;
}

