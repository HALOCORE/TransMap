function f_gold(s) {
    var counter = new Map();
    for (var i = 0; i < s.length; i++) {
        if (counter.has(s[i])) {
            counter.set(s[i], counter.get(s[i]) + 1);
        }
        else {
            counter.set(s[i], 1);
        }
    }
    var sum = 0;
    for (var [key, value] of counter) {
        sum += value % 2;
    }
    return sum < 2;
}

