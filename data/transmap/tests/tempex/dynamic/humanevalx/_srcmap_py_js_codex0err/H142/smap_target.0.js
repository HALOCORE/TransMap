function sum_squares(lst) {
    var result = [];
    for (var i = 0; i < lst.length; i++) {
        if (i % 3 == 0) {
            result.push(Math.pow(lst[i], 2));
        }
        else if (i % 4 == 0 && i % 3 != 0) {
            result.push(Math.pow(lst[i], 3));
        }
        else {
            result.push(lst[i]);
        }
    }
    return result.reduce(function (a, b) { return a + b; });
}

