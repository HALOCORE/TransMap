function f_gold(s) {
    var n = s.length;
    var ans = '';
    for (var i = 0; i < n; i++) {
        var lower = 0;
        var upper = 0;
        for (var j = i; j < n; j++) {
            if (s[j].islower()) {
                lower |= 1 << (ord(s[j]) - ord('a'));
            }
            else {
                upper |= 1 << (ord(s[j]) - ord('A'));
            }
            if (lower == upper && j - i + 1 > ans.length) {
                ans = s.substring(i, j + 1);
            }
        }
    }
    return ans;
}

