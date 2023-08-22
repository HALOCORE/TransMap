function digits(n) {
    let product = 1;
    let odd_count = 0;
    for (let digit of n.toString()) {
        let int_digit = parseInt(digit);
        if (int_digit % 2 === 1) {
            product = product * int_digit;
            odd_count += 1;
        }
    }
    if (odd_count === 0) {
        return 0;
    } else {
        return product;
    }
}

