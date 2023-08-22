function f_gold(sentence) {
    var res = 0;
    for (var c of sentence) {
        res |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
        if (res == 0x3FFFFFF) {
            return true;
        }
    }
    return false;
}

