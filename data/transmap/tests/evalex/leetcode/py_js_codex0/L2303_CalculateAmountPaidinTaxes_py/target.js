
function f_gold(brackets, income) {
    var ans = 0;
    var idx = 0;
    var prev = 0;
    while (income) {
        var a = brackets[idx][0];
        var b = brackets[idx][1];
        var d = a - prev;
        ans += Math.min(d, income) * b / 100;
        if (income <= d) break;
        income -= d;
        idx++;
        prev = a;
    }
    return ans;
}

