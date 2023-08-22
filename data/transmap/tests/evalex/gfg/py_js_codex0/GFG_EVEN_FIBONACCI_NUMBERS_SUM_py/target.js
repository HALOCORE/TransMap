function f_gold(limit) {
    if (limit < 2)
        return 0;
    var ef1 = 0;
    var ef2 = 2;
    var sm = ef1 + ef2;
    while (ef2 <= limit) {
        var ef3 = 4 * ef2 + ef1;
        if (ef3 > limit)
            break;
        ef1 = ef2;
        ef2 = ef3;
        sm = sm + ef2;
    }
    return sm;
}

