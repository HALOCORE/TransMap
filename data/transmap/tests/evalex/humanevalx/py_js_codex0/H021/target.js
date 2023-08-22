
function rescaleToUnit(numbers) {
    var minNumber = Math.min.apply(Math, numbers);
    var maxNumber = Math.max.apply(Math, numbers);
    return numbers.map(function (x) { return (x - minNumber) / (maxNumber - minNumber); });
}

