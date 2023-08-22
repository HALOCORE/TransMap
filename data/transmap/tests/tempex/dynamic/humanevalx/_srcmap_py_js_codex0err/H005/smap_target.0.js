
function intersperse(numbers, delimeter) {
    if (!numbers) {
        return [];
    }

    var result = [];

    for (var i = 0; i < numbers.length - 1; i++) {
        result.push(numbers[i]);
        result.push(delimeter);
    }

    result.push(numbers[numbers.length - 1]);

    return result;
}

