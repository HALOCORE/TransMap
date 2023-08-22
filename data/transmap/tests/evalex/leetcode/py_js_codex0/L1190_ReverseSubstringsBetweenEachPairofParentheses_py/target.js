function f_gold(s) {
    var stack = [];
    for (var c of s) {
        if (c == ")") {
            var tmp = [];
            while (stack[stack.length - 1] != "(") {
                tmp.push(stack.pop());
            }
            stack.pop();
            stack = stack.concat(tmp);
        }
        else {
            stack.push(c);
        }
    }
    return stack.join("");
}

