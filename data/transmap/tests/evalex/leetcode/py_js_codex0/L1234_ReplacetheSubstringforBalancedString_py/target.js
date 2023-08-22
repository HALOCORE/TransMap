
function f_gold(s) {
    var count_chars = new Map();
    for (var i = 0; i < s.length; i++) {
        if (count_chars.has(s[i])) {
            count_chars.set(s[i], count_chars.get(s[i]) + 1);
        }
        else {
            count_chars.set(s[i], 1);
        }
    }
    var required = s.length / 4;
    var more_chars = new Map();
    for (var [key, value] of count_chars) {
        more_chars.set(key, Math.max(0, value - required));
    }
    var min_len = s.length;
    var need_replace = 0;
    for (var [key, value] of more_chars) {
        need_replace += value;
    }
    if (need_replace == 0) {
        return 0;
    }
    var first_cursor = 0;
    var second_cursor = 0;
    while (second_cursor < s.length) {
        if (more_chars.get(s[second_cursor]) > 0) {
            need_replace -= 1;
        }
        more_chars.set(s[second_cursor], more_chars.get(s[second_cursor]) - 1);
        second_cursor += 1;
        while (first_cursor < second_cursor && need_replace == 0) {
            min_len = Math.min(min_len, second_cursor - first_cursor);
            if (more_chars.has(s[first_cursor])) {
                more_chars.set(s[first_cursor], more_chars.get(s[first_cursor]) + 1);
                if (more_chars.get(s[first_cursor]) > 0) {
                    need_replace += 1;
                }
            }
            first_cursor += 1;
        }
    }
    return min_len;
}

