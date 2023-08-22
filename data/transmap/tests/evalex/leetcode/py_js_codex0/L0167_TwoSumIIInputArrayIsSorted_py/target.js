function f_gold(numbers, target) {
    var i = 1;
    var j = numbers.length;
    while (i < j) {
        var x = numbers[i - 1] + numbers[j - 1];
        if (x == target) {
            return [i, j];
        }
        if (x < target) {
            i += 1;
        }
        else {
            j -= 1;
        }
    }
    return [-1, -1];
}

