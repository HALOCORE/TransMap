function f_gold(num) {
    if (Math.floor(num / 10) == 0)
        return true;
    while (num != 0) {
        if (num / 10 == 0)
            return true;
        var digit1 = num % 10;
        var digit2 = (Math.floor(num / 10)) % 10;
        if (Math.abs(digit2 - digit1) > 1)
            return false;
        num = Math.floor(num / 10);
    }
    return true;
}

