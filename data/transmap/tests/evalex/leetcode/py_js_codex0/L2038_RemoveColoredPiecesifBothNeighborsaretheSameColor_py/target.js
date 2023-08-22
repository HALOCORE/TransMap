
function f_gold(colors) {
    var a = 0;
    var b = 0;
    var cnt1 = 0;
    var cnt2 = 0;
    for (var c of colors) {
        if (c == 'A') {
            a += 1;
            if (a > 2) {
                cnt1 += 1;
            }
            b = 0;
        } else {
            b += 1;
            if (b > 2) {
                cnt2 += 1;
            }
            a = 0;
        }
    }
    return cnt1 > cnt2;
}

