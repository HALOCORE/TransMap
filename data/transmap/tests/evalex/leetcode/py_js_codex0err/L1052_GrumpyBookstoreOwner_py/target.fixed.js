function f_gold(customers, grumpy, minutes) {
    var s = 0;
    for (var i = 0; i < customers.length; i++) {
        s += customers[i] * grumpy[i];
    }
    var cs = 0;
    for (var i = 0; i < customers.length; i++) {
        cs += customers[i];
    }
    var t = 0;
    var ans = 0;
    for (var i = 1; i <= customers.length; i++) {
        t += customers[i - 1] * grumpy[i - 1];
        if (i - minutes >= 0) {
            ans = Math.max(ans, cs - (s - t));
            t -= customers[i - minutes] * grumpy[i - minutes];
        }
    }
    return ans;
}

