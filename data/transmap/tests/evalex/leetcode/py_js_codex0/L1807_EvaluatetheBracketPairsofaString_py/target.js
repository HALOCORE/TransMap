
function f_gold(s, knowledge) {
    function find_right_bracket(s, start, end) {
        for (let i = start; i < end; i++) {
            if (s[i] == ')') {
                return i;
            }
        }
    }
    let knowledge_dict = {};
    for (let item of knowledge) {
        knowledge_dict[item[0]] = item[1];
    }
    let res = [];
    let n = s.length;
    let i = 0;
    while (i < n) {
        if (s[i] == '(') {
            let right_bracket_pos = find_right_bracket(s, i + 1, n);
            let key = s.substring(i + 1, right_bracket_pos);
            res.push(knowledge_dict[key] || '?');
            i = right_bracket_pos + 1;
        } else {
            res.push(s[i]);
            i++;
        }
    }
    return res.join('');
}

