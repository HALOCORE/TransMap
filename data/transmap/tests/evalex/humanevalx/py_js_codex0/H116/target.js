function sort_array(arr) {
    return arr.sort(function (a, b) {
        return a - b;
    }).sort(function (a, b) {
        return (a.toString(2).match(/1/g) || []).length - (b.toString(2).match(/1/g) || []).length;
    });
}

