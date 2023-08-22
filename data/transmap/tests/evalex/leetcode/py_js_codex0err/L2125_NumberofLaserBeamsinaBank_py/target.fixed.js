function f_gold(bank) {
    let last = 0, ans = 0;
    for (let b of bank) {
        var t;
        if ((t = b.split("1").length - 1) > 0) {
            ans += last * t;
            last = t;
        }
    }
    return ans;
}

