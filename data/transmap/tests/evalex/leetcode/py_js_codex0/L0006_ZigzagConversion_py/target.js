function f_gold(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    var group = 2 * numRows - 2;
    var ans = [];
    for (var i = 1; i < numRows + 1; i++) {
        var interval = group;
        if (i == numRows) {
            interval = group;
        }
        else {
            interval = 2 * numRows - 2 * i;
        }
        var idx = i - 1;
        while (idx < s.length) {
            ans.push(s[idx]);
            idx += interval;
            interval = group - interval;
            if (interval == 0) {
                interval = group;
            }
        }
    }
    return ans.join('');
}

