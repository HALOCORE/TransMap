function f_gold(n) {
    var presum = 0;
    var res = [];
    for (var i = 1; i < n; i++) {
        res.push(i);
        presum += i;
    }
    res.push(-presum);
    return res;
}

