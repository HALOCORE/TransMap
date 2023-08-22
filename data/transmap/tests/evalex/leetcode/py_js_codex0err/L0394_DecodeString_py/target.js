function f_gold(s) {
    var s1 = [];
    var s2 = [];
    var num = 0;
    var res = "";
    for (var c of s) {
        if (c.isdigit()) {
            num = num * 10 + parseInt(c);
        }
        else if (c == '[') {
            s1.push(num);
            s2.push(res);
            num = 0;
            res = "";
        }
        else if (c == ']') {
            res = s2.pop() + res * s1.pop();
        }
        else {
            res += c;
        }
    }
    return res;
}

