function f_gold(memory1, memory2) {
    var i = 1;
    while (memory1 >= i || memory2 >= i) {
        if (memory1 >= memory2) {
            memory1 -= i;
        }
        else {
            memory2 -= i;
        }
        i += 1;
    }
    return [i, memory1, memory2];
}

