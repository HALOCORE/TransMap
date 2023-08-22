function f_gold(length, updates) {
    var delta = Array(length).fill(0);
    for (var i = 0; i < updates.length; i++) {
        var start = updates[i][0];
        var end = updates[i][1];
        var inc = updates[i][2];
        delta[start] += inc;
        if (end + 1 < length) {
            delta[end + 1] -= inc;
        }
    }
    return delta.reduce(function (acc, curr) {
        return acc.concat(acc[acc.length - 1] + curr);
    }, [0]).slice(1);
}

