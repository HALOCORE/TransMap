function is_nested(string) {
    var opening_bracket_index = [];
    var closing_bracket_index = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == '[') {
            opening_bracket_index.push(i);
        } else {
            closing_bracket_index.push(i);
        }
    }
    closing_bracket_index.reverse();
    var cnt = 0;
    var i = 0;
    var l = closing_bracket_index.length;
    for (var idx of opening_bracket_index) {
        if (i < l && idx < closing_bracket_index[i]) {
            cnt += 1;
            i += 1;
        }
    }
    return cnt >= 2;
}

