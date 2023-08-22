function unique_digits(x) {
    let odd_digit_elements = [];
    for (let i of x) {
        if (Array.from(String(i), Number).every(c => c % 2 === 1)) {
            odd_digit_elements.push(i);
        }
    }
    return odd_digit_elements.sort((a, b) => a-b);
}

