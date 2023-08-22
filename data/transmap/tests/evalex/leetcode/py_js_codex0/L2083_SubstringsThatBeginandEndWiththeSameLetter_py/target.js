function f_gold(s) {
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var ans = 0;
    for (var c of s) {
        var i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        counter[i] += 1;
        ans += counter[i];
    }
    return ans;
}

