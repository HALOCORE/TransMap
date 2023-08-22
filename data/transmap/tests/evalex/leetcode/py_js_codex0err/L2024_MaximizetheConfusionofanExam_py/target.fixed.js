function f_gold(answerKey, k) {
    function get(c, k) {
        var l = -1, r = -1;
        while (r < answerKey.length - 1) {
            r += 1;
            if (answerKey[r] == c) {
                k -= 1;
            }
            if (k < 0) {
                l += 1;
                if (answerKey[l] == c) {
                    k += 1;
                }
            }
        }
        return r - l;
    }
    return Math.max(get('T', k), get('F', k));
}

