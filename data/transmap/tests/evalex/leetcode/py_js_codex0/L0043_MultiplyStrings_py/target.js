function f_gold(num1, num2) {
    function mul(b, i) {
        var j = m - 1;
        var t = 0;
        while (j >= 0 || t) {
            if (j >= 0) {
                var a = parseInt(num1[j]);
                t += a * b;
            }
            res[i] += t % 10;
            if (res[i] >= 10) {
                res[i] %= 10;
                res[i + 1] += 1;
            }
            i = i + 1;
            j = j - 1;
            t = Math.floor(t / 10);
        }
    }
    var m = num1.length;
    var n = num2.length;
    var res = Array(m + n).fill(0);
    for (var i = 0; i < n; i++) {
        var b = parseInt(num2[n - 1 - i]);
        mul(b, i);
    }
    while (res.length > 1 && res[res.length - 1] == 0) {
        res.pop();
    }
    return res.reverse().join("");
}

