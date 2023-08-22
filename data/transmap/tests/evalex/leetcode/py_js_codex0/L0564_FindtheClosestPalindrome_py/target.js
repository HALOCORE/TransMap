function f_gold(n) {
    var x = parseInt(n);
    var l = n.length;
    var res = [Math.pow(10, l - 1) - 1, Math.pow(10, l) + 1];
    var left = parseInt(n.substring(0, (l + 1) >> 1));
    for (var i = left - 1; i < left + 2; i++) {
        var j = i;
        if (l % 2 == 0) j = i;
        else j = Math.floor(i / 10);
        while (j) {
            i = i * 10 + j % 10;
            j = Math.floor(j / 10);
        }
        res.push(i);
    }
    res.splice(res.indexOf(x), 1);
    var ans = -1;
    for (var t of res) {
        if (ans == -1 || Math.abs(t - x) < Math.abs(ans - x) || (Math.abs(t - x) == Math.abs(ans - x) && t < ans)) ans = t;
    }
    return ans.toString();
}

