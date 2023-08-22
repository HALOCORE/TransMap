
function sortNumbers(numbers) {
    var valueMap = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    };
    return numbers.split(' ').filter(function (x) {
        return x;
    }).sort(function (x) {
        return valueMap[x];
    }).join(' ');
}

