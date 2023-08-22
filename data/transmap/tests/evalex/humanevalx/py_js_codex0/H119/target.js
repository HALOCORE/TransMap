function match_parens(lst) {
    function check(s) {
        let val = 0;
        for (let i of s) {
            if (i == '(') {
                val = val + 1;
            } else {
                val = val - 1;
            }
            if (val < 0) {
                return false;
            }
        }
        return val == 0 ? true : false;
    }

    let S1 = lst[0] + lst[1];
    let S2 = lst[1] + lst[0];
    return check(S1) || check(S2) ? 'Yes' : 'No';
}

