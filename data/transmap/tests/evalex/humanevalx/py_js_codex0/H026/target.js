
function removeDuplicates(numbers) {
    var c = {};
    numbers.forEach(function (n) {
        c[n] = (c[n] || 0) + 1;
    });
    return numbers.filter(function (n) {
        return c[n] <= 1;
    });
}

