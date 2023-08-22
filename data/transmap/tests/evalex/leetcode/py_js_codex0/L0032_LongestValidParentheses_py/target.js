function f_gold(s) {
    var Longest = temp = 0;
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(s[i]);
        }
        else if (stack.length != 0 && stack[stack.length - 1] == '(') {
            stack.pop();
            temp += 2;
        }
        else {
            stack = [];
            if (temp > Longest) {
                Longest = temp;
            }
            temp = 0;
        }
    }
    if (temp > Longest) {
        Longest = temp;
    }
    return Longest;
}

