function f_gold(lowLimit, highLimit) {
    var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (var i = lowLimit; i <= highLimit; i++) {
        var s = 0;
        while (i) {
            s += i % 10;
            i = Math.floor(i / 10);
        }
        counter[s] += 1;
    }
    return Math.max.apply(null, counter);
}

