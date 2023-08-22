function f_gold(current, correct) {
    var a = parseInt(current.substring(0, 2)) * 60 + parseInt(current.substring(3));
    var b = parseInt(correct.substring(0, 2)) * 60 + parseInt(correct.substring(3));
    var ans = 0;
    var d = b - a;
    for (var i = 60; i >= 1; i--) {
        ans += Math.floor(d / i);
        d %= i;
    }
    return ans;
}

