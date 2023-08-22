function f_gold(number, digit) {
    return Math.max(
        number.substring(0, i) + number.substring(i + 1, number.length) for (let i = 0; i < number.length; i++) if (number[i] == digit)
    );
}

