function f_gold(s, k) {
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var i = 0, j = 0, maxCnt = 0;
    while (i < s.length) {
        counter[s.charCodeAt(i) - 65] += 1;
        maxCnt = Math.max(maxCnt, counter[s.charCodeAt(i) - 65]);
        if (i - j + 1 > maxCnt + k) {
            counter[s.charCodeAt(j) - 65] -= 1;
            j += 1;
        }
        i += 1;
    }
    return i - j;
}

