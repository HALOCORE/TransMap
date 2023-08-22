function f_gold(a, b) {
    a = a & 0xFFFFFFFF;
    b = b & 0xFFFFFFFF;
    while (b) {
        var carry = ((a & b) << 1) & 0xFFFFFFFF;
        a = a ^ b;
        b = carry;
    }
    return (a < 0x80000000) ? a : ~(a ^ 0xFFFFFFFF);
}

