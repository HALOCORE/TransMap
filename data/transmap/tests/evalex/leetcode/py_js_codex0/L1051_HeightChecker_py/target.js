function f_gold(heights) {
    var expected = heights.slice().sort();
    return heights.reduce(function (acc, curr, i) {
        return acc + (curr != expected[i]);
    }, 0);
}

