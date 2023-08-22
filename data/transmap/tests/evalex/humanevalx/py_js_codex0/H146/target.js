
function specialFilter(nums) {
    let count = 0;
    for (let num of nums) {
        if (num > 10) {
            let odd_digits = [1, 3, 5, 7, 9];
            let number_as_string = num.toString();
            if (odd_digits.includes(parseInt(number_as_string[0])) && odd_digits.includes(parseInt(number_as_string[number_as_string.length - 1]))) {
                count += 1;
            }
        }
    }
    return count;
}

