function f_gold(n, k) {
    function count(curr) {
        var next = curr + 1;
        var cnt = 0;
        while (curr <= n) {
            cnt += Math.min(n - curr + 1, next - curr);
            next = next * 10;
            curr = curr * 10;
        }
        return cnt;
    }
    var curr = 1;
    k -= 1;
    while (k) {
        var cnt = count(curr);
        if (k >= cnt) {
            k -= cnt;
            curr += 1;
        }
        else {
            k -= 1;
            curr = curr * 10;
        }
    }
    return curr;
}

