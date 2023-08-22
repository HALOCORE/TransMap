function f_gold(bookings, n) {
    var delta = Array(n).fill(0);
    for (var i = 0; i < bookings.length; i++) {
        var first = bookings[i][0];
        var last = bookings[i][1];
        var seats = bookings[i][2];
        delta[first - 1] += seats;
        if (last < n) {
            delta[last] -= seats;
        }
    }
    return delta.reduce(function (acc, curr) {
        return acc.concat(acc[acc.length - 1] + curr);
    }, [0]).slice(1);
}

