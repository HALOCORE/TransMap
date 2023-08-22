function f_gold(s) {
    var largest_digit = second_largest_digit = -1;
    for (var c of s) {
        if (c.isdigit()) {
            var num = parseInt(c);
            if (num > largest_digit) {
                second_largest_digit = largest_digit;
                largest_digit = num;
            }
            else if (num > second_largest_digit && num < largest_digit) {
                second_largest_digit = num;
            }
        }
    }
    return second_largest_digit;
}

