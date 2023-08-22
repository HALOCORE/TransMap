function f_gold(word) {
    var ans = prev = 0;
    for (var c of word) {
        var curr = c.charCodeAt(0) - 'a'.charCodeAt(0);
        var t = Math.abs(prev - curr);
        t = Math.min(t, 26 - t);
        ans += t + 1;
        prev = curr;
    }
    return ans;
}

