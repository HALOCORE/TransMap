function f_gold(s) {
    var half = s.length >> 1;
    var vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    var s1 = 0;
    for (var i = 0; i < half; i++) {
        if (vowels.has(s[i])) {
            s1++;
        }
    }
    var s2 = 0;
    for (var i = half; i < s.length; i++) {
        if (vowels.has(s[i])) {
            s2++;
        }
    }
    return s1 == s2;
}

