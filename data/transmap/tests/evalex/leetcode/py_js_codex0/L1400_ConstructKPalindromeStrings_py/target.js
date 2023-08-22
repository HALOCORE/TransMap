function f_gold(s, k) {
    if (s.length < k) {
        return false;
    }
    var counter = {};
    for (var i = 0; i < s.length; i++) {
        if (counter[s[i]]) {
            counter[s[i]]++;
        }
        else {
            counter[s[i]] = 1;
        }
    }
    var cnt = 0;
    for (var key in counter) {
        if (counter[key] % 2 == 1) {
            cnt++;
        }
    }
    return cnt <= k;
}

