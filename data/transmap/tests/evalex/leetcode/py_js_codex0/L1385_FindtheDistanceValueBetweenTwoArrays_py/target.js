function f_gold(arr1, arr2, d) {
    return arr1.filter(function (a) {
        return arr2.every(function (b) {
            return Math.abs(a - b) > d;
        });
    }).length;
}

