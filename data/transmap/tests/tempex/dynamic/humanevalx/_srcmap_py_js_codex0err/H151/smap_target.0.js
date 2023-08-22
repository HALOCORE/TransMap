function doubleTheDifference(lst) {
    return lst.filter(function(i) {
        return i > 0 && i % 2 !== 0 && i.toString().indexOf(".") === -1;
    }).map(function(i) {
        return i ** 2;
    }).reduce(function(a, b) {
        return a + b;
    });
}

