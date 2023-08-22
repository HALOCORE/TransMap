function f_gold(s) {
    var last = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = 0; i < s.length; i++) {
        last[s.charCodeAt(i) - 97] = i;
    }
    var ans = [];
    var left = 0;
    var right = 0;
    for (var i = 0; i < s.length; i++) {
        right = Math.max(right, last[s.charCodeAt(i) - 97]);
        if (i == right) {
            ans.push(right - left + 1);
            left = right + 1;
        }
    }
    return ans;
}

