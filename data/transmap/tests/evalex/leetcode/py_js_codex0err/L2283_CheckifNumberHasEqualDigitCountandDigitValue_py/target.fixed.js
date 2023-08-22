function f_gold(num) {
    var cnt = {};
    for (var i = 0; i < num.length; i++) {
        if (cnt[num[i]] == undefined) {
            cnt[num[i]] = 1;
        } else {
            cnt[num[i]] += 1;
        }
    }
    for (var i = 0; i < num.length; i++) {
        if (parseInt(num[i]) != (cnt[i] || 0)) {
            return false;
        }
    }
    return true;
}

