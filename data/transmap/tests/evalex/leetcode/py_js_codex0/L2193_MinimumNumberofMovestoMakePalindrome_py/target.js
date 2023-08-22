function f_gold(s) {
    var cs = s.split("");
    var ans = 0;
    var n = s.length;
    var i = 0;
    var j = n - 1;
    while (i < j) {
        var even = false;
        for (var k = j; k >= i; k--) {
            if (cs[i] == cs[k]) {
                even = true;
                while (k < j) {
                    var temp = cs[k];
                    cs[k] = cs[k + 1];
                    cs[k + 1] = temp;
                    k += 1;
                    ans += 1;
                }
                j -= 1;
                break;
            }
        }
        if (!even) {
            ans += Math.floor(n / 2) - i;
        }
        i += 1;
    }
    return ans;
}

