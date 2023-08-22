function f_gold(num, k) {
    var cnt = 0;
    var s = num.toString();
    for (var i = 0; i < s.length - k + 1; i++) {
        var tmp = parseInt(s.substring(i, i + k));
        if (tmp != 0 && num % tmp == 0) {
            cnt += 1;
        }
    }
    return cnt;
}

