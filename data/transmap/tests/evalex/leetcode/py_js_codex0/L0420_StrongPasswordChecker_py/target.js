function f_gold(password) {
    function countTypes(s) {
        var a = 0;
        var b = 0;
        var c = 0;
        for (var ch of s) {
            if (ch.islower()) {
                a = 1;
            }
            else if (ch.isupper()) {
                b = 1;
            }
            else if (ch.isdigit()) {
                c = 1;
            }
        }
        return a + b + c;
    }
    var types = countTypes(password);
    var n = password.length;
    if (n < 6) {
        return Math.max(6 - n, 3 - types);
    }
    if (n <= 20) {
        var replace = 0;
        var cnt = 0;
        var prev = '~';
        for (var curr of password) {
            if (curr == prev) {
                cnt += 1;
            }
            else {
                replace += Math.floor(cnt / 3);
                cnt = 1;
                prev = curr;
            }
        }
        replace += Math.floor(cnt / 3);
        return Math.max(replace, 3 - types);
    }
    replace = 0;
    cnt = 0;
    var remove = n - 20;
    var remove2 = 0;
    prev = '~';
    for (var curr of password) {
        if (curr == prev) {
            cnt += 1;
        }
        else {
            if (remove > 0 && cnt >= 3) {
                if (cnt % 3 == 0) {
                    remove -= 1;
                    replace -= 1;
                }
                else if (cnt % 3 == 1) {
                    remove2 += 1;
                }
            }
            replace += Math.floor(cnt / 3);
            cnt = 1;
            prev = curr;
        }
    }
    if (remove > 0 && cnt >= 3) {
        if (cnt % 3 == 0) {
            remove -= 1;
            replace -= 1;
        }