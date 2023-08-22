function f_gold(left, right) {
    return [
        num
        for (num in range(left, right + 1))
        if (all(i != '0' && num % int(i) == 0 for (i in str(num))))
    ];
}

