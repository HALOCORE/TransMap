
function meanAbsoluteDeviation(numbers) {
    var mean = numbers.reduce(function (a, b) { return a + b; }) / numbers.length;
    return numbers.reduce(function (a, b) { return a + Math.abs(b - mean); }, 0) / numbers.length;
}

