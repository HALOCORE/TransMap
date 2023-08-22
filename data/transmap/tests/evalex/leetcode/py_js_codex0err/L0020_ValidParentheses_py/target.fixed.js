function f_gold(s) {
    var q = [];
    var parentheses = new Set(['()', '[]', '{}']);
    for (var ch of s) {
        if ('([{'.indexOf(ch) >= 0) {
            q.push(ch);
        }
        else if (q.length == 0 || !parentheses.has(q.pop() + ch)) {
            return false;
        }
    }
    return q.length == 0;
}

