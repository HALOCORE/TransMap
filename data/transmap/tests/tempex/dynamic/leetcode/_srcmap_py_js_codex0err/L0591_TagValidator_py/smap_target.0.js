function f_gold(code) {
    function check(tag) {
        return 1 <= tag.length <= 9 && tag.split("").every(function (c) { return c.isupper(); });
    }
    var stk = [];
    var i = 0;
    var n = code.length;
    while (i < n) {
        if (i && !stk.length) {
            return false;
        }
        if (code.substring(i, i + 9) == '<![CDATA[') {
            i = code.indexOf(']]>', i + 9);
            if (i < 0) {
                return false;
            }
            i += 2;
        }
        else if (code.substring(i, i + 2) == '</') {
            var j = i + 2;
            i = code.indexOf('>', j);
            if (i < 0) {
                return false;
            }
            var t = code.substring(j, i);
            if (!check(t) || !stk.length || stk.pop() != t) {
                return false;
            }
        }
        else if (code[i] == '<') {
            var j = i + 1;
            i = code.indexOf('>', j);
            if (i < 0) {
                return false;
            }
            var t = code.substring(j, i);
            if (!check(t)) {
                return false;
            }
            stk.push(t);
        }
        i += 1;
    }
    return !stk.length;
}

