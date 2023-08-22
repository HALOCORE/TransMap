function f_gold(s) {
    var carry = false;
    var ans = 0;
    for (var c of s.slice(1).split("").reverse().join("")) {
        if (carry) {
            if (c == '0') {
                c = '1';
                carry = false;
            }
            else {
                c = '0';
            }
        }
        if (c == '1') {
            ans += 1;
            carry = true;
        }
        ans += 1;
    }
    if (carry) {
        ans += 1;
    }
    return ans;
}

